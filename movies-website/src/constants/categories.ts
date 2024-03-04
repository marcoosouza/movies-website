import { v4 as uuidv4 } from 'uuid';

export type CategoriesProps = {
    id: string,
    name: string,
}

export const categories: CategoriesProps[] = [
    {
        id: uuidv4(),
        name: "All"
    },
    {
        id: uuidv4(),
        name: "Action"
    },
    {
        id: uuidv4(),
        name: "Adventure",
    },
    {
        id: uuidv4(),
        name: "Comedy",
    },
    {
        id: uuidv4(),
        name: "Crime",
    },
    {
        id: uuidv4(),
        name: "Horror",
    }
]