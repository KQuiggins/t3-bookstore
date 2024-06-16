import Image from 'next/image';
import { db } from '../server/db/index';


const mockURLs = [
  "https://utfs.io/f/a4372bb7-5302-45b1-9edd-88a9e4605836-k1gfgc.jpg",
  "https://utfs.io/f/ead0054e-bd71-4a94-9e1f-38676152586d-lunyee.jpg",
  "https://utfs.io/f/a72407f5-bdcb-4f27-8bfe-7864511afba9-ift151.jpg",
  "https://utfs.io/f/f0bfb124-f394-411d-84f4-38bd3debdb69-rfwkuu.jpg"
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
      <div
        className="
          flex
          flex-wrap
        ">
        {mockImages.map((image) => (
          <div key={image.id} className="m-4 object-contain">
            <Image src={image.url} alt="book" className="" width={100} height={100}/>
            </div>
        ))}
      </div>

    </>
  );
}
