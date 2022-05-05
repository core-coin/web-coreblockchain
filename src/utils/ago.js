
export default function ago(date) {
  return ((Date.now() - Date.parse(date)) / 1000).toFixed()
}