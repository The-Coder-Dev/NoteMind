import NoteForm from "@/components/NoteForm";
import NotesList from "@/components/NotesList";


export default function Home() {
  return (
    <section className="w-full min-h-screen">
        <div className="mx-auto max-w-2xl w-full min-h-screen flex flex-col gap-4 items-center justify-center px-5">
          <h1 className="text-4xl font-bold">NoteMind API</h1>
          <NoteForm />
          <NotesList />
        </div>
    </section>
  )
}
