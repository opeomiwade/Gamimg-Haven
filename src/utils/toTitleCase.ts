function toTitleCase(str: string): string {
  return str.charAt(0).toUpperCase() + str.substring(1).toLowerCase();
}

export default toTitleCase
