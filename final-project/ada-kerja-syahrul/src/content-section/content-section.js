import React from "react";
import SearchBox from "../search/search-box";
import RekomendasiWrap from "../rekondasi-loker/rekomendasi-wrap";
import LokerWrap from "../loker/loker-wrap";

const ContentSection = (prop) => {
  
  let data = prop.dataFetch

  return (
    <>
      <SearchBox />
      <RekomendasiWrap dataFetch={data} />
      <LokerWrap dataFetch={data} home = {'Baru'} posision='home'/>
    </>
  )
}

export default ContentSection