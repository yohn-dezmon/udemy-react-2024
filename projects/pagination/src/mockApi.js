// mockApi.js
export function fetchItems(lastId = 0) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const batchSize = 10;
      const totalItems = 104; // This is only known by the API
      const start = lastId + 1;
      const end = Math.min(start + batchSize - 1, totalItems);
      const items =
        start > totalItems
          ? []
          : Array.from({ length: end - start + 1 }, (_, idx) => ({
              id: start + idx,
              value: `Item ${start + idx}`,
            }));
      resolve(items);
    }, 1000);
  });
}
