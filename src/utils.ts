export function getFileUrl(path: string) {
  const name = window.location.hostname.split(".")[0];
  return `https://codesandbox.io/s/${name}?file=${path}`;
}
