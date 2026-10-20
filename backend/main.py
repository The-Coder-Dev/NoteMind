from fastapi import FastAPI, HTTPException, status
from pydantic import BaseModel
from typing import List
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="NoteMind API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=['http://localhost:3000'],
    allow_headers=["*"],
    allow_methods=["*"]
)

class NoteCreate(BaseModel):
    title: str
    content: str

class Note(NoteCreate):
    id: int


notes: dict[int, Note] = {}
next_id = 1


@app.get('/notes', response_model=List[Note])
def get_all_notes():
    return list(notes.values())

@app.get('/notes/{note_id}', response_model=Note)
def get_note(note_id: int):
    if note_id not in notes:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Note not found")
    return notes[note_id]

@app.post('/notes', response_model=Note, status_code=status.HTTP_201_CREATED)
def create_note(note_model: NoteCreate):
    global next_id
    new_note = Note(id=next_id, **note_model.model_dump())
    notes[next_id] = new_note
    next_id += 1
    return new_note

@app.put('/notes/{note_id}', response_model=Note, status_code=status.HTTP_200_OK)
def update_note(note_id: int, note_model: NoteCreate):
    if note_id not in notes:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Note not found")
    note = Note(id=note_id, **note_model.model_dump())
    notes[note_id] = note
    return note
            
@app.delete('/notes/{note_id}', status_code=status.HTTP_204_NO_CONTENT)
def delete_note(note_id: int):
    if note_id not in notes:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Note not found")
    del notes[note_id]
