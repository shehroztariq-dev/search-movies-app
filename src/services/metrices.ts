import { supabase } from "../lib/supabase";

export const updateSearchCount = async ({
  searchTerm,
  movie,
}: UpdateSearchCountProps) => {
  try {
    // 1. Check if search term exists in the database
    const { data: existing, error: fetchError } = await supabase
      .from("metrices")
      .select("*")
      .eq("search_term", searchTerm)
      .maybeSingle();

    if (fetchError) {
      console.log("Error fetching search count:", fetchError.message);
      return;
    }

    if (existing) {
      // 2. If it exists, update the count
      const { error: updateError } = await supabase
        .from("metrices")
        .update({ count: existing.count + 1 })
        .eq("id", existing.id);

      if (updateError) {
        console.log("Error updating search count:", updateError.message);
      }
    } else {
      // 3. If it doesn't exist, insert a new row with count = 1
      const { error: insertError } = await supabase.from("metrices").insert([
        {
          search_term: searchTerm,
          count: 1,
          movie_id: movie.id,
          poster_url: movie.poster_path
            ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
            : null,
        },
      ]);

      if (insertError) {
        console.log("Error inserting search count:", insertError.message);
      }
    }
  } catch (error) {
    console.log("Error:", error);
  }
};
