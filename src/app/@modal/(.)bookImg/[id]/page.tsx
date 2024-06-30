import { getBook } from '~/server/queries';
import { Modal } from './modal';
import Image from 'next/image';

export default async function PhotoModal({
  params: { id: photoId },
}: {
  params: { id: string };
}) {

    const bookIdAsNum = Number(photoId);
    if (isNaN(bookIdAsNum)) {
      throw new Error("Invalid book id");
    }

    const bookImage = await getBook(bookIdAsNum);
  return <Modal>
    <div>
        <Image
          src={bookImage.image_url}
          alt={bookImage.title}
          className="object-fit mx-auto h-[200px] rounded-xl"
          width={500}
          height={500}
        />

    </div>

  </Modal>;
}