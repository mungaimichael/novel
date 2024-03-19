import { useEffect, useState } from "react";

export interface Main {
    numFound: number;
    start: number;
    numFoundExact: boolean;
    docs: Doc[];
    num_found: number;
    q: string;
    offset: null;
}

export interface Doc {
    key: string;
    type: Type;
    seed: string[];
    title: string;
    title_suggest: string;
    title_sort: string;
    edition_count: number;
    edition_key: string[];
    publish_date?: string[];
    publish_year?: number[];
    first_publish_year?: number;
    isbn: string[];
    last_modified_i: number;
    ebook_count_i: number;
    ebook_access: EbookAccess;
    has_fulltext: boolean;
    public_scan_b: boolean;
    publisher: string[];
    language?: Language[];
    author_key?: string[];
    author_name?: string[];
    publisher_facet: string[];
    _version_: number;
    author_facet?: string[];
    lcc?: string[];
    lcc_sort?: string;
    number_of_pages_median?: number;
    lccn?: string[];
    oclc?: string[];
    ratings_count_1?: number;
    ratings_count_2?: number;
    ratings_count_3?: number;
    ratings_count_4?: number;
    ratings_count_5?: number;
    ratings_average?: number;
    ratings_sortable?: number;
    ratings_count?: number;
    readinglog_count?: number;
    want_to_read_count?: number;
    currently_reading_count?: number;
    already_read_count?: number;
    cover_edition_key?: string;
    cover_i?: number;
    subject?: string[];
    subject_facet?: string[];
    subject_key?: string[];
    ia?: string[];
    ia_collection?: string[];
    ia_collection_s?: string;
    lending_edition_s?: string;
    lending_identifier_s?: string;
    printdisabled_s?: string;
    ia_box_id?: string[];
    id_amazon?: string[];
    publish_place?: string[];
    first_sentence?: string[];
}

export enum EbookAccess {
    Borrowable = "borrowable",
    NoEbook = "no_ebook",
}

export enum Language {
    Eng = "eng",
    Ger = "ger",
}

export enum Type {
    Work = "work",
}


export interface DataFetchReturn {
    loading: boolean, 
    data:Main
}

const useDataFetch = (search?: string): DataFetchReturn => {
    
    
    const [data, setData] = useState<Main>({
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
            const response = await fetch(`https://openlibrary.org/search.json?q=${search}&limit=1&numFoundExact&limit=20`);
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
