const API_BASE_URL = "https://www.googleapis.com/books/v1/volumes";
const API_KEY = import.meta.env.VITE_GOOGLE_BOOKS_API_KEY;

const sleep = (ms: number) => new Promise((res) => setTimeout(res, ms));

export const fetchAllBooks = async (
  startIndex = 0,
  maxResults = 20,
  retries = 3,
) => {
  const params = new URLSearchParams({
    q: "subject:fiction",
    startIndex: startIndex.toString(),
    maxResults: maxResults.toString(),
    ...(API_KEY && { key: API_KEY }),
  });

  const endpoint = `${API_BASE_URL}?${params.toString()}`;

  for (let attempt = 0; attempt <= retries; attempt++) {
    const response = await fetch(endpoint);

    if (response.ok) {
      const data = await response.json();
      return {
        items: data.items ?? [],
        totalItems: data.totalItems ?? 0,
      };
    }

    if (
      (response.status === 503 || response.status === 429) &&
      attempt < retries
    ) {
      const delay = 2 ** attempt * 500;
      console.warn(
        `Books API returned ${response.status}, retrying in ${delay}ms...`,
      );
      await sleep(delay);
      continue;
    }

    const errorData = await response.json().catch(() => null);
    console.log("Google Books error detail:", errorData);
    throw new Error(`Failed to fetch books (status ${response.status})`);
  }

  throw new Error("Failed to fetch books after retries");
};
