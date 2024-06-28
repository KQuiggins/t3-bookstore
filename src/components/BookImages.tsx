import Image from "next/image";
import { db } from "../server/db/index";

const BookImages = async () => {

    // Fetch the data from the database
  const books = await db.query.books.findMany({
    orderBy: (model, {desc}) => desc(model.id)
  });
  return (
    <>
        <div className="flex flex-wrap justify-center">
        {[...books, ...books, ...books].map((book) => (
          <div key={book.id} className="m-4  overflow-hidden">
            <Image
              src={book.image_url}
              alt="book"
              className="object-fit mx-auto h-[200px] rounded-xl"
              width={150}
              height={150}
              priority={true}
            />
            <div>{book.title}</div>
          </div>
        ))}
      </div>

    </>
  )
}

export default BookImages