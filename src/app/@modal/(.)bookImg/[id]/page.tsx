import { getBook } from '~/server/queries';
import { FullPageImageView } from '~/components/FullPageBookView';
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

      <FullPageImageView photoId={photoId} />
    

  </Modal>;
}