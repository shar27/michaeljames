import React, { useEffect, useState } from "react";
import { fetchLandDeals, fetchPropDeals } from "../../lib/contentful";
import Image from "next/image";
import Link from "next/link";
const Deals = () => {
  const [landDeals, setLandDeals] = useState([]); // State to store fetched land deals
  const [propDeals, setPropDeals] = useState([]); // State to store fetched property deals
  const [loadingLand, setLoadingLand] = useState(true); // Separate loading state for land deals
  const [loadingProp, setLoadingProp] = useState(true); // Separate loading state for property deals
  // Fetch land deals
  useEffect(() => {
    const getLandData = async () => {
      const deals = await fetchLandDeals();
      setLandDeals(deals);
      setLoadingLand(false);
    };
    getLandData();
  }, []); // Runs only once when component mounts

  // Fetch property deals (uncomment if needed)
  useEffect(() => {
    const getPropData = async () => {
      const deals = await fetchPropDeals();
      setPropDeals(deals);
      setLoadingProp(false);
    };
    getPropData();
  }, []); // Runs only once when component mounts

  // Show loading message while fetching
  if (loadingLand || loadingProp) {
    return <div>Loading...</div>;
  }
  //   console.log(landDeals);
  console.log(propDeals);
  console.log(landDeals);
  

  return (
    <div>
      <h2 className="bg-white text-black text-center text-3xl">Current Land deals</h2>
      <h3 className="bg-white text-black text-center text-3xl">Can't find what you're looking for? Sign up for <Link className="text-black font-bold underline" href="BespokeSourcing">Bespoke-sourcing</Link> </h3>
      {/* Display land deals */}
      {landDeals.length === 0 ? (
        <div>No land deals available</div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 p-5 gap-20 bg-white text-black">
          {landDeals.map((ldeal) => (
            <div className="shadow-lg p-10 flex flex-col" key={ldeal.sys.id}>
              <h2
                className={`text-xl lg:text-3xl font-bold p-2 leading-10 uppercase text-center ${
                  ldeal.fields.heading &&
                  ldeal.fields.heading.includes("(SOLD)")
                    ? "text-red-300"
                    : "text-black"
                }`}
              >
                {ldeal.fields.heading}
              </h2>

              <p>{ldeal.fields.propertyType}</p>
              <p>Purchase Price:£ {ldeal.fields.purchasePrice}</p>
              <Image
                src={`https:${ldeal.fields.featured.fields.file.url}`}
                alt={ldeal.fields.featured.fields.title || "Land Deal Image"}
                width={500}
                height={300}
                layout="responsive"
              />
              <div className="mt-auto p-5">
                <Link href={`https://calendly.com/michael-u4i/`}>
                  <button className="border border-black text-black p-2 rounded-sm w-full h-12">
                    Learn More
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}

      <h2 className="bg-white text-black text-center text-3xl">Current Property Deals</h2>
      <h3 className="bg-white text-black text-center text-3xl">Can't find what you're looking for? Sign up for <Link className="text-black font-bold underline" href="BespokeSourcing">Bespoke-sourcing</Link> </h3>

      {/* Display property deals */}
      {propDeals.length === 0 ? (
        <div>Can't find what you're looking for? Sign up for  <Link href="BespokeSourcing">Bespoke-sourcing</Link> </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 p-5 gap-20 bg-white text-black">
          {propDeals.map((deal) => (
            <div className="shadow-lg p-10 flex flex-col" key={deal.sys.id}>
              <h2 className="text-xl lg:text-3xl font-bold text-black p-2 leading-10 uppercase text-center">
                {deal.fields.heading}
              </h2>
              <p>{deal.fields.propertyType}</p>
              <p>Rent: £{deal.fields.rent}</p>
              <Image
                src={`https:${deal.fields.featured.fields.file.url}`}
                alt={
                  deal.fields.featured.fields.title ||
                  "Property Deal Image"
                }
                width={500}
                height={300}
                layout="responsive"
              />
              <div className="mt-auto p-5">
              <Link href={`https://calendly.com/michael-u4i/`}>
                  <button className="border border-black text-black p-2 rounded-sm w-full h-12">
                   Learn More
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Deals;
