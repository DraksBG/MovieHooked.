import React, {useState} from "react";

export const UseSearch = (search: any) => {
    const [searchValue, setSearchValue] = useState<string>('');

    const handleSearchInputChanges = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);
    }

    const resetInputField = () => {
        setSearchValue('');
    }

    const callSearchFunction = (e: any) => {
        e.preventDefault();
        search(searchValue);
        resetInputField();

    }

    return {
        searchValue: searchValue,
        handleSearchInputChanges,
        callSearchFunction
    }
}

