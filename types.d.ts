type Result = {
    pageid: string,
    title: string,
    extract: string,
    thumbnail?: { //optional -> '?:'
        source: string,
        width: number,
        height: number,
    }
}

type SearchResult = {
    query?: { //optional -> '?:'
        pages?: Result[], //optional -> '?:'
    },
}