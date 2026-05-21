/** Bazowy URL API (HTTP i WebSocket Socket.IO używają tego samego hosta). */
export function apiBase(): string {
  return process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:3001"
}
