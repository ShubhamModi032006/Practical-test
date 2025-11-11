// Minimal root page: server component that lists orders and links to the menu.
export default async function Home() {
  let orders = [];
  try {
    const res = await fetch('/api/orders');
    if (res.ok) orders = await res.json();
  } catch (e) {
    // ignore errors, show empty list
  }

  return (
    <main>
      <h1>Welcome</h1>
      <p>
        <a href="pages/menu">View menu</a>
      </p>

      <section>
        <h2>Orders</h2>
        {orders.length ? (
          <ul>
            {orders.map((o) => (
              <li key={o.id}>#{o.id} {o.name ? `- ${o.name}` : ''}</li>
            ))}
          </ul>
        ) : (
          <p>No orders yet</p>
        )}
      </section>
    </main>
  );
}
