export interface Course {
    id: number;
    topRated?: boolean;
    title: string;
    creationDate: string;
    duration: number;
    description: string;
    authors: {
      id: number;
      name: string;
    };
    date?: string;
}
