import slugify from "@sindresorhus/slugify"

export function getImageFileName(originalName: string, customFileName?: string): string {
  // Split extension and name to only slugify the file name
  const [, ...rest] = originalName.split(".").reverse()
  const slugifiedName = slugify((customFileName || rest.reverse().join(".")).substr(0, 128))

  // Add a timestamp to the file name to prevent name clashes
  return `tmp/${slugifiedName}-${Date.now()}.jpg`
}
