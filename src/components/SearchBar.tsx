"use client";

import { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Search } from "lucide-react";

interface SearchBarProps {
  handleSearch: (e: React.FormEvent, searchQuery: string) => void;
}

const SearchBar = ({ handleSearch }: SearchBarProps) => {
  const [searchQuery, setSearchQuery] = useState<string>("");

  return (
    <form
      onSubmit={(e: React.FormEvent) => handleSearch(e, searchQuery)}
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
};

export default SearchBar;
