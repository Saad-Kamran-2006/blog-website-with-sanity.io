export function convertHyphenToSpace(inputString: string): string {
  return inputString.replace(/-/g, " ");
}

export function convertSpaceToHyphen(inputString: string): string {
  return inputString.replace(/ /g, "-");
}
