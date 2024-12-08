import React, { useState } from "react";

const ChangeCarButton = ({ onSearchResultSelect }) => {
    const [isSearching, setIsSearching] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = async () => {
        try {
            const response = await fetch(`http://localhost:8000/api/search?keyword=${encodeURIComponent(searchTerm)}`, {
                method: "GET",
                headers: { "Content-Type": "application/json" },
            });

            const result = await response.json();

            if (response.ok) {
                console.info("Search successful. Retrieved results:", result);
                setSearchResults(result.data || []); // Assuming the API response has a `data` array
            } else {
                console.warn("Search failed. Response:", result);
                setSearchResults([]);
            }
        } catch (error) {
            console.error("An error occurred while performing the search:", error.message);
            setSearchResults([]);
        }
    };

    const handleSelectResult = (CarID) => {
        onSearchResultSelect(CarID); // Pass selected car to the parent component
        setSearchTerm("");
        setSearchResults([]);
        setIsSearching(false);
    };

    return (
        <div className="absolute top-0 right-0">
            {isSearching ? (
                <div className="relative">
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
                    {searchResults.length > 0 && (
                        <ul 
                            className="absolute bg-white border border-gray-300 rounded-md mt-2 w-full max-h-40 overflow-y-auto"
                        >
                            {searchResults.map((car, index) => (
                                <li
                                    key={index}
                                    onClick={() => handleSelectResult(car.CarID)}
                                    className="px-4 py-2 hover:bg-blue-100 cursor-pointer flex justify-between"
                                >
                                    <div>
                                        <span className="font-semibold">{car.Name}</span> - ${car.Price}
                                    </div>
                                    <div className="text-gray-500 text-sm">{car.Status}</div>
                                </li>
                            ))}
                        </ul>
                    )}
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
