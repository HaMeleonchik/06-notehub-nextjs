import { fetchNoteById } from "@/app/lib/api"
// import css  from "./NoteDetails.module.css"
import NoteDetailsClient from "./NoteDetails.client"
import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query"
interface Props {
    params:Promise<{noteId:string}>
}

export default async function NoteDetails({ params}: Props) {
  const { noteId } = await params

  const queryClient = new QueryClient()

  await queryClient.prefetchQuery({
    queryKey: ["notes", noteId],
    queryFn: () => fetchNoteById(noteId),
  })
  
  // const note = await fetchNoteById(noteId) 

  return<HydrationBoundary state={dehydrate(queryClient)}>
         <NoteDetailsClient />
        </HydrationBoundary>
} 