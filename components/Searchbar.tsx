"use client";

import { error } from "console";
import { FormEvent, useState } from "react";

const isValidAmazomProductUrl = (url: string) => {
  try {
    const parsedUrl = new URL(url);
    const hostname = parsedUrl.hostname;

    if (
      hostname.includes("amazon.com") ||
      hostname.includes("amazon.") ||
      hostname.endsWith("amazon")
    ) {
      return true;
    }
    return false;
  } catch (err) {
    console.error(err);
    return false;
  }
};

const Searchbar = () => {
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const isValidLink = isValidAmazomProductUrl(search);

    if (!isValidLink) return alert("Please enter valid link.");

    try {
      setIsLoading(true);

      // scrape the product
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form className="flex flex-wrap gap-4 mt-12" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter product link"
        className="searchbar-input"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        type="submit"
        className="searchbar-btn"
        disabled={search === "" || isLoading}
      >
        {isLoading ? "Searching..." : "search"}
      </button>
    </form>
  );
};

export default Searchbar;
