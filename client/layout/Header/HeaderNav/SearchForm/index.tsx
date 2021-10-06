import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { message } from "antd";
import router from "next/router";
import React, { FC, useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { SEARCH_POST_REQUEST } from "../../../../@reducers/post";
import useInput from "../../../../util/useInput";
import { SearchFormWrapper } from "./styles";

interface IProps {}

const SearchForm: FC<IProps> = () => {
  const dispatch = useDispatch();
  const [onSearch, setOnSearch] = useState(false);
  const [keyword, onChangeKeyword, setKeyword] = useInput("");

  const onClickSearch = useCallback(() => {
    console.log(keyword);

    if (!onSearch || keyword.length < 2 || !keyword.trim()) {
      setOnSearch((prev) => !prev);
    } else {
      dispatch({
        type: SEARCH_POST_REQUEST,
        data: { keyword },
      });
      router.push(`/search/${keyword}`);
      setKeyword("");
    }
  }, [dispatch, router, keyword, setKeyword, onSearch]);
  return (
    <SearchFormWrapper>
      <div className={onSearch ? "onSearch searchForm-inner" : "searchForm-inner"}>
        <input value={keyword} onChange={onChangeKeyword} type="text" />
        <button onClick={onClickSearch}>
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
    </SearchFormWrapper>
  );
};

export default SearchForm;
