interface ClassMap {
  [key: string]: boolean;
}

export const classString = (classMap: ClassMap) => {
  const classes: string[] = [];
  for (const name in classMap) {
    if (classMap[name as keyof typeof classMap]) {
      classes.push(name);
    }
  }
  return classes.join(' ');
};
