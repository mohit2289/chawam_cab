import React from "react";
import { useLocation } from 'react-router-dom';

import SearchView from "../components/CabListingComponents/SearchView";
import Filter from "../components/CabListingComponents/Filter";
import Listing from "../components/CabListingComponents/Listing";

const List = () => {
    const { state } = useLocation();
    const {vehicleresult, postdata} = state;

    return (

        <>
            <div className="breadcrumb-bar">
                <div className="container">
                    <div className="row align-items-center text-center">
                        <div className="col-md-12 col-12">
                            <h2 className="breadcrumb-title">Cab Listings</h2>
                            <nav aria-label="breadcrumb" className="page-breadcrumb">
                                <ol className="breadcrumb">

                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            <SearchView searchFormData={postdata} />
            <section className="section car-listing">
                <div className="container">
                    <div className="row">
                        {/* <Filter /> */}
                        <Listing vehicleData={vehicleresult} searchFormData={postdata} />

                    </div>
                </div>
            </section>

        </>

    )
}

export default List;