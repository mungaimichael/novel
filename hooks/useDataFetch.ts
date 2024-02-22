import { useEffect, useState } from "react";

interface BookInfo {
    key: string;
    type: string;
    seed: string[];
    title: string;
    title_suggest: string;
    title_sort: string;
    edition_count: number;
    edition_key: string[];
    publish_date: string[];
    publish_year: number[];
    first_publish_year: number;
    isbn: string[];
    last_modified_i: number;
    ebook_count_i: number;
    ebook_access: string;
    has_fulltext: boolean;
    public_scan_b: boolean;
    cover_edition_key: string;
    cover_i: number;
    publisher: string[];
    language: string[];
    subject: string[];
    publisher_facet: string[];
    subject_facet: string[];
    _version_: number;
    subject_key: string[];
}

interface UseDataFetchReturn {
    numFound: number;
    start: number;
    numFoundExact: boolean; 
    docs: BookInfo[];
    num_found: number;
    q: string;
    offset: null;
}

interface UseDataFetchReturnInterface {
    loading: boolean; 
    data: UseDataFetchReturn;
}

const useDataFetch = (): UseDataFetchReturnInterface => {
    const [data, setData] = useState<UseDataFetchReturn>({
        numFound: 0,
        start: 0,
        numFoundExact: false,
        docs: [],
        num_found: 0,
        q: "",
        offset: null
    });
    const [loading, setLoading] = useState(false);

    const fetchData = async () => {
        try {
            setLoading(true);
            const response = await fetch('https://openlibrary.org/search.json?q=artificial+technology&limit=1&numFoundExact&limit=20');
            const jsonData = await response.json();
            setData(jsonData);
            setLoading(false);
        } catch (error) {
            console.error("Error fetching data:", error);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return { loading, data };
};

export default useDataFetch;
