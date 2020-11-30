import React from "react";

// components

import { ALL_POSTS_QUERY } from "../../components/queries/PostQuery";
import CardTable from "../../components/Cards/CardTable.js";
import CustomTable from "../../components/Tables/CustomTable.js";
import { initializeApollo } from "../../configApp/apolloClient";

function Tables(props) {
  console.log(props);
  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <CardTable />
        </div>
        <div className="w-full mb-12 px-4">
          <CardTable color="dark" />
        </div>
        <div className="w-full mb-12 px-4">
          <CustomTable color="light" />
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: ALL_POSTS_QUERY,
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
    revalidate: 1,
  };
}

export default Tables;
