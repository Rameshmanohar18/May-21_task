import { useEffect, useState, useCallback } from "react";

const PAGE_SIZE = 10;
const MAX_ITEMS = 50;

function createPosts(startIndex) {
  return Array.from(
    { length: PAGE_SIZE },
    (_, i) => `Post ${startIndex + i + 1}`
  );
}

function InfiniteScrollPage() {
  const [items, setItems] = useState(() => createPosts(0));
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const loadMore = useCallback(() => {
    if (loading || !hasMore) return;

    setLoading(true);

    setTimeout(() => {
      setItems((prevItems) => {
        const updatedItems = [
          ...prevItems,
          ...createPosts(prevItems.length),
        ];

        if (updatedItems.length >= MAX_ITEMS) {
          setHasMore(false);
        }

        return updatedItems;
      });

      setLoading(false);
    }, 1000);
  }, [loading, hasMore]);

  const handleScroll = useCallback(() => {
    const scrollTop = document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;
    const fullHeight = document.documentElement.offsetHeight;

    if (windowHeight + scrollTop >= fullHeight - 100) {
      loadMore();
    }
  }, [loadMore]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Infinite Scroll</h1>

      {items.map((item) => (
        <div
          key={item}
          style={{
            padding: "20px",
            margin: "10px 0",
            border: "1px solid gray",
            borderRadius: "8px",
          }}
        >
          {item}
        </div>
      ))}

      {loading && (
        <p style={{ textAlign: "center" }}>
          Loading more posts...
        </p>
      )}

      {!hasMore && (
        <p style={{ textAlign: "center" }}>
          No more posts available.
        </p>
      )}
    </div>
  );
}

export default InfiniteScrollPage;
