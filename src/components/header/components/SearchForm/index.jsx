import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchInput = () => {
    const [value, setValue] = useState('');

    const handleSearch = () => {};

    return (
        <div className="nav__search">
            <input
                type="text"
                placeholder="Tìm kiếm"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                onKeyDown={(e) => {
                    if (e.code === 'Enter') {
                        handleSearch();
                    }
                }}
            />
            <FaSearch />
        </div>
    );
};

export default SearchInput;
