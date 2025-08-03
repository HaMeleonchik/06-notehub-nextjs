export interface Note {
    id: number;
    title: string;
    content:string;
    tag: string;
}
export interface NewPostNote {
    title: string;
    content: string;
    tag:string;
}

export interface NoteDetails {
    title: string;
    content: string;
    updatedAt: string
}