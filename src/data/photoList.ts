import { v4 as uuidv4 } from 'uuid';

interface PhotoType {
    id: string
    photoUrl: string
}

export const photoList: PhotoType[] = [
    { id: uuidv4(), photoUrl: '1.png' },
    { id: uuidv4(), photoUrl: '2.png' },
    { id: uuidv4(), photoUrl: '3.png' },

    { id: uuidv4(), photoUrl: '4.png' },
    { id: uuidv4(), photoUrl: '5.png' },
    { id: uuidv4(), photoUrl: '6.png' },

    { id: uuidv4(), photoUrl: '7.png' },
    { id: uuidv4(), photoUrl: '8.png' },
    { id: uuidv4(), photoUrl: '9.png' },
]