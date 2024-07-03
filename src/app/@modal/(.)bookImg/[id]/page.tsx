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
        <img src={bookImage.image_url} alt="" className='w-96 h-96' />

    </div>

  </Modal>;
}