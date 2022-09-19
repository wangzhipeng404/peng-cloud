export const style2Obj = (style) => {
  if (typeof style !== 'string') {
    return style;
  }

  const obj = {};
  style.split(';').forEach((element) => {
    if (!element) {
      return;
    }

    const items = element.split(':');

    let key = items.shift();
    let value = items.join(':');

    if (!key) return;

    key = key.replace(/^\s*/, '').replace(/\s*$/, '');
    value = value.replace(/^\s*/, '').replace(/\s*$/, '');

    key = key
      .split('-')
      .map((v, i) => (i > 0 ? `${v[0].toUpperCase()}${v.substr(1)}` : v))
      .join('');

    obj[key] = value;
  });
  return obj;
};

export const fillBackgroundImage = (value) => {
  if (value && !/^url/.test(value) && !/^linear-gradient/.test(value)) {
    return `url(${value})`;
  }
  return value;
};

export const isNumber = (value) => /^(-?\d+)(\.\d+)?$/.test(value);

export const transformStyle = (style) => {
  if (!style) {
    return {};
  }

  let styleObj = {};
  const results = {};

  if (typeof style === 'string') {
    styleObj = style2Obj(style);
  } else {
    styleObj = { ...style };
  }

  const whiteList = ['zIndex', 'opacity', 'fontWeight', 'flex'];
  Object.entries(styleObj).forEach(([key, value]) => {
    if (key === 'backgroundImage') {
      value && (results[key] = fillBackgroundImage(value));
    } else if (key === 'transform' && typeof value !== 'string') {
      const values = Object.entries(value)
        .map(([transformKey, transformValue]) => {
          if (!transformValue.trim()) return '';
          if (transformKey === 'rotate' && isNumber(transformValue)) {
            transformValue = `${transformValue}deg`;
          }
          return `${transformKey}(${transformValue})`;
        })
        .join(' ');
      results[key] = !values.trim() ? 'none' : values;
    } else if (!whiteList.includes(key) && value && /^[-]?[0-9]*[.]?[0-9]*$/.test(value)) {
      results[key] = `${value}px`;
    } else {
      results[key] = value;
    }
  });

  return results;
}