import React, { useState } from 'react';
import "./Filtercomponent.css";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { IoFilterOutline } from "react-icons/io5";
import { IoIosCheckmark } from "react-icons/io";

function CategoryFiltered({category, contents }) {
    const [isCollapsed, setIsCollapsed] = useState(false);

    return (
        <div className="category-filtered">
            <div onClick={() => setIsCollapsed(!isCollapsed)} className="category-filtered-head">
                <span>{category}</span>
                {isCollapsed ? <FaMinus /> : <FaPlus />}
            </div>
            <div className={`category-filtered-body ${isCollapsed ? "" : "cf-body-collapse"}`}>
            {
                contents.map((name, index) => (
                    <label key={index} className='filter-items-container'>
                        <span className='filter-name'>{name}</span>
                        <input className='filter-checkbox' type="checkbox" />
                        <IoIosCheckmark className="filter-checkmark"></IoIosCheckmark>
                    </label>
                ))

            }
            </div>
        </div>
    )
}

function FilterComponent() {

    const filterCategories = [
        {
            category: "Gender",
            contents: [
                "Men",
                "Women",
                "Unisex"
            ]
        },
        {
            category: "Size",
            contents: [
                "XS",
                "S",
                "M",
                "L",
                "XL",
                "XXL"
            ]
        },
        {
            category: "Price",
            contents: [
                20,
                50,
                70,
                100,
                200
            ]
        },
        {
            category: "Fit",
            contents: [
                "Skinny",
                "Slim",
                "Fit",
                "Loose"
            ]
        }
    ]

  return (
        <aside className='filter-store'>
            <div className='filter-icon-container'>
                <span>Filter</span>
                <IoFilterOutline className='filter-icon'/>
            </div>
            <div className="filter-menu-container">
                {
                    filterCategories.map((categoryItem, index) => {
                        return (
                            <CategoryFiltered 
                                key={index}
                                {...categoryItem} 
                            />
                        )
                    }) 
                }
            </div>
        </aside>
  )
}

export default FilterComponent
