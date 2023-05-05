import React, { useState, useEffect } from "react";
import axios from "axios";
import NFT_Fraction2 from "../components/nft.fraction2";
import { ethereum, polygon } from "../utils/images.util";
import { Link, useSearchParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Marketplace = () => {
  const { t } = useTranslation();
  const [searchParams] = useSearchParams();
  const [searchFlag, setSearchFlag] = useState(true);

  const [items, setItems] = useState([]);
  const [noItems, setNoItems] = useState(false);
  const [loading, setLoading] = useState(false);
  const [initialItemsLoaded, setInitialItemsLoaded] = useState(true);
  const [saleType, setSaleType] = useState("all");
  const [sortName, setSortName] = useState("recent");
  const [searchTxt, setSearchTxt] = useState("");
  const [page, setPage] = useState(1);
  
  function loadMore() {
    if (!loading) {
      setInitialItemsLoaded(false);
      setPage(page + 1);
    }
  }
  
  useEffect(() => {
    if (initialItemsLoaded) setPage(1);
    setLoading(true);
    let url = `/api/fractions?saleType=${saleType}&searchTxt=${searchTxt}&sortBy=${sortName}&page=${page}`;
    if (searchFlag) {
      const _saleType = searchParams.get("sale") || "all";
      const _searchTxt = searchParams.get("name") || "";
      const _searchSort = searchParams.get("sort") || "recent";
      setSaleType(_saleType);
      setSearchTxt(_searchTxt);
      setSortName(_searchSort);
      url = `/api/fractions?saleType=${_saleType}&searchTxt=${_searchTxt}&sortBy=${sortName}&page=${page}`;
      setSearchFlag(false);
    }

    axios
      .get(url)
      .then((res) => {
        if (page === 1) setItems(res.data.items);
        else setItems(items.concat(res.data.items));
        setLoading(false);
        if (res.data.items?.length === 0) setNoItems(true);
      })
      .catch((e) => {
        console.log(e);
        setLoading(false);
        setItems([]);
      });
  }, [page, saleType, sortName]);

  const changeType = (value) => {
    setInitialItemsLoaded(true);
    setSaleType(value);
  };
  const changeSort = (value) => {
    setInitialItemsLoaded(true);
    setSortName(value);
  };

  return (
    <>
      <section className="bg-half-100 w-100 pb-0 mb-0">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              {/* <h4 className="text-dark title-dark fw-normal ">
                {t("explore")}
              </h4> */}
              <button className="btn btn-primary">
                {t("collection")}
              </button>
            </div>
            {/* <div className="col-lg-4">
              <div className="hstack gap-3 justify-content-end">
                <button className="btn btn-soft-primary"><img src={ethereum} style={{ paddingRight: 10 }} alt="" />Ethereum</button>
                <button className="btn btn-soft-primary"><img src={polygon} style={{ paddingRight: 10 }} alt="" />Polygon</button>
              </div>
            </div> */}
          </div>
          <div className="row g-lg-0 align-items-center">
            <div className="col-lg-5 col-md-6 ms-auto">
              <div className="hstack gap-3 justify-content-end">
                <div className="w-100 filter-search-form position-relative filter-border">
                  <select
                    className="form-select"
                    id="filter-type"
                    value={saleType}
                    onChange={(e) => changeType(e.target.value)}
                  >
                    <option value="all"> {t("all")}</option>
                    <option value="auction">{t("liveAuction")}</option>
                    <option value="fixed">{t("buy")}</option>
                  </select>
                </div>

                <div className="w-100 filter-search-form position-relative filter-border">
                  <select
                    className="form-select"
                    id="filter-type2"
                    value={sortName}
                    onChange={(e) => changeSort(e.target.value)}
                  >
                    <option value="recent">{t("recent")}</option>
                    <option value="old">{t("old")}</option>
                    <option value="az">A-Z</option>
                    <option value="za">Z-A</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section pt-4">
        <div className="container">
          <div className="row row-cols-xl-4 row-cols-lg-3 row-cols-sm-2 row-cols-1 g-4">
            {items?.map((data, index) => {
              return <NFT_Fraction2 item={data} key={`marketplace-${index}`} />;
            })}
          </div>
          {/* Load More */}
          <div
            className="mt-4 text-center"
            style={{ display: noItems ? "none" : "" }}
          >
            <button
              className="btn btn-pills btn-primary mx-1"
              onClick={() => loadMore()}
            >
              {loading ? "Loading..." : "Load more"}
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Marketplace;
