"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"

const API_URL = "http://127.0.0.1:8000"

type Note = {
    id: number;
    title: string;
    content: string
}

export default function NotesList() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [notes, setNotes] = useState<Note[]>([])
    useEffect(() => {
        async function fetchNotes() {
            try {
                setLoading(true);
                const response = await fetch(`${API_URL}/notes`, {
                    cache: "no-store"
                });

                if (!response.ok) {
                    throw new Error("Failed to fetch notes")
                }

                const data: Note[] = await response.json()
                setNotes(data)
            } catch (err) {
                setError(err instanceof Error ? err.message : "Something went wrong")
            } finally {
                setLoading(false)
            }
        }

        fetchNotes();
    }, [])

    if (loading) return <p className="p-3">Loading...</p>
    if (error) return <p className="p-3">{error}</p>

    return (
        <div className="w-full p-3 grid gap-3">
            {notes.length === 0 ?
                (<p>No notes yet.</p>) : (
                    notes.map((note) => (
                        <Card className="p-4" key={note.id}>
                            <h2 className="font-semibold">{note.title}</h2>
                            <p className="text-sm text-muted-foreground">{note.content}</p>
                        </Card>
                    ))
                ) 
                
            }
        </div>
    )
}
