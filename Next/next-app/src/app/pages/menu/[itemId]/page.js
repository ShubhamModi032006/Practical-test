

// Dynamic route - Item details page
import { useRouter } from 'next/router';

export default function ItemDetails() {
  const router = useRouter();
  const { itemId } = router.query;

  return (
    <div>
      <h1>Item Details</h1>
      <p>Showing details for item #{itemId}</p>
    </div>
  );
}
