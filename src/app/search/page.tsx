'use client'
import * as React from "react";
import styles from "./page.module.css";
import CoreNormalAppbar from "@/widgets/UI/NormalAppbar";
import SearchBar from "@/components/inputs/searchbar/Searchbar";
import Chips from "@/components/chips/Chips";
import List, { ListItem } from "@/components/lists/Lists";
import Link from "@/components/links/Links";
import Container from "@/components/containers/Containers";

export default function Search() {
    const [query, setQuery] = React.useState('');

    const handleSearch = () => {
      console.log('Searching for:', query);
    };

    const chipsBtn = [
        { 
            title: { label: "Filter" }, 
            buttons: [
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
            ] 
        }
    ];

    const searchHistory: Array<string | null> = [
        "Branding",
        "Branding",
        "Branding",
        "Branding",
        "Branding",
        "Branding"
    ];

    const tags: Array<string | null> = [
        "Branding",
        "Branding",
        "Branding",
        "Branding",
        "Branding",
        "Branding"
    ]

    return(
        <>
            <CoreNormalAppbar title="Search" backBtn />
            <Container hasNavDrawer={false} hasNavbar={false}>
                <div className={styles.searchbar_container}>
                    <div className={styles.searchbar_wrapper}>
                        <SearchBar
                            value={query}
                            onChange={setQuery}
                            onSearch={handleSearch}
                        />
                    </div>
                </div>
                <Chips chips={chipsBtn} />
                {
                    tags.length > 0 ?
                    <List sectionClassName={styles.align_horizontal} heading="Tags">
                        {
                            tags.map((tag, i) => (
                                <Link outlined padded href={`/search?q&tag=${tag}`} key={i}>#{tag}</Link>
                            ))
                        }
                    </List> : ""
                }
                {
                    searchHistory.length > 0 ?
                    <List heading="History">
                        {
                            searchHistory.map((history, i) => (
                                <ListItem icon="arrow_outward" href={`/search?q=${history}`} key={i} heading={history}/>
                            ))
                        }
                    </List> : ""
                }
            </Container>
        </>
    )
}
