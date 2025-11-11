

// Dynamic route - Item details page (App Router)
// Use the `params` passed into the server component instead of `next/router`.
export default function ItemDetails({ params }) {
  const { itemId } = params || {};

  return (
    <div>
      <h1>Item Details</h1>
      <p>Showing details for item #{itemId}</p>
    </div>
  );
}
