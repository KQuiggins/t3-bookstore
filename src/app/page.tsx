import Image from 'next/image';
import { db } from '../server/db/index';


export const dynamic = "force-dynamic";

const mockURLs = [
  "https://utfs.io/f/fd231282-0ade-4487-b0a1-e73b7a1048d5-k1gfgc.png",
  "https://utfs.io/f/de736688-afc9-48b5-951d-ae5540735209-rfwkuu.png",
  "https://utfs.io/f/29419808-6364-4e9e-b50a-a382b2207cb0-ift151.png",
  "https://utfs.io/f/53276cb2-70c9-4043-b5ae-62d8b20eabaa-lunyee.png"
];

const mockImages = mockURLs.map((url, index) => ({
  id: index + 1,
  url
}));


export default async function HomePage() {


   // Fetch the data from the database
   const books = await db.query.books.findMany();

   // Log the data to the console (for debugging purposes)
   console.log(books);

  return (
    <>
      <h1 className="text-2xl text-center">Welcome to Ken&apos;s Bookstore</h1>
      <div className="flex flex-wrap justify-center">
        {mockImages.map((image) => (
          <div key={image.id} className="m-4  overflow-hidden">
            <Image
              src={image.url}
              alt="book"
              className="object-fit h-[200px] mx-auto rounded-xl"
              width={150}
              height={150}
              priority={true}
            />
          </div>
        ))}
      </div>

    </>
  );
}
