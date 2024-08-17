'use client'
import * as React from "react";
import styles from "./page.module.css";
import CoreNormalAppbar from "@/widgets/UI/NormalAppbar";
import SearchBar from "@/components/inputs/searchbar/Searchbar";
import Chips from "@/components/chips/Chips";

export default function Search() {
    const [query, setQuery] = React.useState('');

    const handleSearch = () => {
      console.log('Searching for:', query);
    };
    return(
        <>
            <CoreNormalAppbar title="Search" backBtn />
            <SearchBar
                value={query}
                onChange={setQuery}
                onSearch={handleSearch}
            />
            <Chips 
                chips={[
                    { title: { label: "Filter" }, buttons: [
                        { label: "Shown", selected: true },
                        { label: "Shown" },
                        { label: "Shown" },
                        { label: "Shown" },
                        { label: "Shown" },
                        { label: "Shown", selected: true },
                        { label: "Shown", selected: true },
                        { label: "Shown" },
                        { label: "Shown" },
                        { label: "Shown" },
                        { label: "Shown" },
                        { label: "Shown", selected: true }
                    ] }
                ]}
            />
        </>
    )
}
