"use client"

import { useContext } from "react"

import { WebSocketContext } from "@/providers/websocket/websocket-context"

/** Dostęp do współdzielonego połączenia WebSocket z dowolnego komponentu klienckiego. */
export function useWebSocket() {
  const context = useContext(WebSocketContext)

  if (!context) {
    throw new Error("useWebSocket must be used within WebSocketProvider")
  }

  return context
}
