"use client"

import { useEffect, useRef, type ReactNode } from "react"
import { io, type Socket } from "socket.io-client"

import { apiBase } from "@/lib/api-base"
import { WebSocketContext } from "@/providers/websocket/websocket-context"

type WebSocketProviderProps = {
  children: ReactNode
}

export function WebSocketProvider({ children }: WebSocketProviderProps) {
  const socketRef = useRef<Socket | null>(null)

  useEffect(() => {
    const client = io(apiBase(), {
      transports: ["websocket"],
      withCredentials: true,
      reconnection: true,
    })

    socketRef.current = client

    return () => {
      client.disconnect()
      socketRef.current = null
    }
  }, [])

  return (
    <WebSocketContext.Provider value={{ socketRef }}>
      {children}
    </WebSocketContext.Provider>
  )
}
