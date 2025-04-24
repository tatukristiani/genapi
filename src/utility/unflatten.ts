type FlatObject = Record<string, unknown>;

/**
 * Unflattens an object whose keys use dot-notation and bracket-notation.
 */
export function unflatten(flat: FlatObject): string {
  const result: object = {};

  for (const flatKey in flat) {
    const value = flat[flatKey];

    // Turn "properties[0].propName" into ["properties","0","propName"]
    const tokens = flatKey
      .replace(/\]/g, "") // remove all closing brackets
      .split(/\.|\[/g); // split on dots or opening bracket

    let cursor: any = result;

    tokens.forEach((token, idx) => {
      const isLast = idx === tokens.length - 1;
      const nextToken = tokens[idx + 1];
      const nextIsIndex = nextToken !== undefined && /^\d+$/.test(nextToken);

      if (isLast) {
        // Final token: assign value
        if (/^\d+$/.test(token) && Array.isArray(cursor)) {
          cursor[Number(token)] = value;
        } else {
          cursor[token] = value;
        }
      } else {
        // Not last: ensure structure exists
        if (/^\d+$/.test(token)) {
          // Numeric → array slot
          const arrIndex = Number(token);
          if (!Array.isArray(cursor)) {
            throw new Error(
              `Expected array at "${tokens
                .slice(0, idx)
                .join(".")}", but found ${typeof cursor}`
            );
          }
          if (cursor[arrIndex] === undefined) {
            cursor[arrIndex] = nextIsIndex ? [] : {};
          }
          cursor = cursor[arrIndex];
        } else {
          // String → object key
          if (!(token in cursor)) {
            cursor[token] = nextIsIndex ? [] : {};
          }
          cursor = cursor[token];
        }
      }
    });
  }

  return JSON.stringify(result);
}
