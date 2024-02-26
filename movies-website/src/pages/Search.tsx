import ContentDisplay from "../components/ContentDisplay/ContentDisplay"
import Navbar from "../components/Navbar/Navbar"
import PageTitle from "../components/PageTitle/PageTitle"

type SearchProps = {
    keyword: string
}

function Search({keyword}: SearchProps) {
    return (
        <>
            <Navbar></Navbar>
            <PageTitle title={keyword} description={`All result for the word ${keyword}`}></PageTitle>
        </>
    )
}

export default Search