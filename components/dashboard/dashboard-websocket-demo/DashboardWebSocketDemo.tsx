"use client"

import { useCallback, useState } from "react"

import { Button } from "@/components/ui/button"
import { WEBSOCKET_MESSAGE_EVENT } from "@/lib/websocket/events"
import { useWebSocket } from "@/providers/websocket/use-websocket"

export function DashboardWebSocketDemo() {
  const { socketRef } = useWebSocket()
  const [lastReply, setLastReply] = useState<string | null>(null)
  const [sending, setSending] = useState(false)

  const sendMessage = useCallback(() => {
    const socket = socketRef.current
    if (!socket?.connected) return

    setSending(true)
    const payload = `Witaj z frontu o ${new Date().toLocaleTimeString("pl-PL")}`

    socket.emit(WEBSOCKET_MESSAGE_EVENT, payload, (reply: string) => {
      setLastReply(reply)
      setSending(false)
    })
  }, [socketRef])

  return (
    <section className="flex flex-col gap-3 rounded-xl border border-border bg-card p-4 text-card-foreground">
      <h2 className="text-sm font-medium">WebSocket (nauka)</h2>
      <Button
        type="button"
        onClick={sendMessage}
        disabled={sending}
      >
        {sending ? "Czekam na odpowiedź…" : "Wyślij wiadomość"}
      </Button>
      {lastReply && (
        <p className="text-sm">
          Ostatnia odpowiedź backendu: <strong>{lastReply}</strong>
        </p>
      )}
    </section>
  )
}
