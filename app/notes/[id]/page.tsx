import { fetchNoteById } from "@/app/lib/api"
// import css  from "./NoteDetails.module.css"
import NoteDetailsClient from "./NoteDetails.client"
import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query"
interface Props {
    params:Promise<{id:string}>
}

export default async function NoteDetails({ params}: Props) {
  const { id } = await params

  const queryClient = new QueryClient()

  await queryClient.prefetchQuery({
    queryKey: ["notes", id],
    queryFn: () => fetchNoteById(id),
  })
  
  // const note = await fetchNoteById(noteId) 

  return<HydrationBoundary state={dehydrate(queryClient)}>
         <NoteDetailsClient />
        </HydrationBoundary>
} 