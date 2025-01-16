"use client";

import { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Search } from "lucide-react";
import useSessionStore from "../stores/useSessionStore";
import { getBookById } from "../api/books";

export function SearchBar() {
  const [searchQuery, setSearchQuery] = useState<number | string>("");
  const { setCurrentBook, addViewedBook } = useSessionStore();

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    // Implement your search logic here
    console.log("Searching for:", searchQuery);

    const response = await getBookById(searchQuery);

    if (response.status === 200) {
      const book = response.data;
      setCurrentBook(book);
      addViewedBook(book);
    } else {
      console.error("Error fetching book:", response);
    }
  };

  return (
    <form
      onSubmit={handleSearch}
      className="flex w-full max-w-sm items-center space-x-2"
    >
      <Input
        type="text"
        placeholder="Search with book id..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="flex-grow bg-white"
      />
      <Button type="submit" size="icon" className="w-8 h-8">
        <Search className="h-4 w-4" />
        <span className="sr-only">Search</span>
      </Button>
    </form>
  );
}
