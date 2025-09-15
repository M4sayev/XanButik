import React from "react";

function MobileSortButton({sortOptions, setSortOptions}) {
    return (
        <div className='sort-container'>
            <label htmlFor="sortProductBy" className="sort-dropdown-btn " tabIndex={0}>Sort</label>
            <select name="sort" id="sortProductBy" value={sortOptions} onChange={e => setSortOptions(e.target.value)}>
                <option value="Recommended">Recommended</option>
                <option value="What's new">What's New</option>
                <option value="Price high to low">Price high to low</option>
                <option value="Price low to high">Price low to high</option>
            </select>
        </div>
    );
}

export default MobileSortButton;