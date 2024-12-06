import React, { useState } from "react";

const ChangeCarButton = ({ onSearch }) => {
    const [isSearching, setIsSearching] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = () => {
        onSearch(searchTerm);
        setSearchTerm(""); // Clear input field
        setIsSearching(false); // Close search bar
    };

    return (
        <div className="absolute top-0 right-0">
            {isSearching ? (
                <div className="flex items-center space-x-2">
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder="Search car..."
                        className="border border-gray-300 rounded-md px-2 py-1"
                    />
                    <button
                        onClick={handleSearch}
                        className="bg-blue-500 text-white px-4 py-1 rounded-md hover:bg-blue-600"
                    >
                        Search
                    </button>
                    <button
                        onClick={() => setIsSearching(false)}
                        className="bg-gray-500 text-white px-4 py-1 rounded-md hover:bg-gray-600"
                    >
                        Cancel
                    </button>
                </div>
            ) : (
                <button
                    onClick={() => setIsSearching(true)}
                    className="bg-blue-500 text-white text-sm px-4 py-2 rounded-md hover:bg-blue-600"
                >
                    Change Car
                </button>
            )}
        </div>
    );
};

export default ChangeCarButton;
