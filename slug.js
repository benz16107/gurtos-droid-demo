// Turn a title into a URL slug: "Hello, World!" -> "hello-world"
export function slug(title) {
  return title.toLowerCase()
    .replace(/[^a-z0-9\s]/g, '')
    .trim()
    .replace(/\s+/g, '-');
}
