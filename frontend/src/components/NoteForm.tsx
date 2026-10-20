import { Card, CardContent, CardHeader, CardTitle, CardAction } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"


const NoteForm = () => {
  return (
    <Card className="w-full ">
        <CardHeader>
            <CardTitle>Add Note</CardTitle>
        </CardHeader>
        <CardContent>
            <Input 
                placeholder="Title"
            />
            <Textarea 
                placeholder="Content" rows={6}
            />
            <Button variant="outline">
                Add Note
            </Button>

        </CardContent>
    </Card>
  )
}

export default NoteForm