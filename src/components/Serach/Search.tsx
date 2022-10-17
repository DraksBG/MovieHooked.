import styles from "./Search.module.css"
import {UseSearch} from "./Hooks/UseSearch";

const Search = (props: any) => {
    const {searchValue, handleSearchInputChanges, callSearchFunction} = UseSearch(props.search);
    return (
        <form className={styles.search}>
            <input value={searchValue}
                   onChange={handleSearchInputChanges}
                   type="text"/>
            <input onClick={callSearchFunction} type="submit" value={"SEARCH"}
            />
        </form>
    )
}

export default Search