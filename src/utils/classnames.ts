export function cls(...args: Array<string | undefined | null | false | Record<string, boolean>>): string {
  return args
    .flatMap(arg => {
      if (!arg) return [];
      if (typeof arg === 'string') return [arg];
      if (typeof arg === 'object') {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        return Object.entries(arg).filter(([, value]) => value).map(([key]) => key);
      }
      return [];
    })
    .join(' ');
}
