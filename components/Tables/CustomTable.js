import React from "react";
import PropTypes from "prop-types";
import { gql, useQuery, useLazyQuery, useMutation } from "@apollo/client";

// components

import TableDropdown from "../Dropdowns/TableDropdown.js";
import Table from "./Table.js";

const ALL_POSTS_QUERY = gql`
  query posts {
    allPosts {
      id
      title
      description
    }
  }
`;

const ADD_LIST_MUTATION = gql`
  mutation createPost(
    $title: String
    $description: String
    $published: Boolean
    $slug: String
  ) {
    createPost(
      data: {
        title: $title
        description: $description
        published: $published
        slug: $slug
      }
    ) {
      title
      description
      published
      slug
    }
  }
`;

export default function CustomTable({ color }) {
  const { loading, error, data } = useQuery(ALL_POSTS_QUERY);
  const [
    addList,
    { data: dataList, error: errorList, loading: loadingList },
  ] = useMutation(ADD_LIST_MUTATION);

  const addNewList = () => {
    addList({
      variables: {
        title: "gerti6",
        description: "test3@test.gr",
        published: true,
        slug: "grt3",
      },
      refetchQueries: ["posts"],
      // update: (cache, { data: uData }) => {
      //   console.log("data", uData);
      //   const cacheId = cache.identify(uData.createPost);
      //   cache.modify({
      //     fields: {
      //       data: (existingFieldData, { toReference }) => {
      //         console.log("existingFieldData", toReference);
      //         return [...existingFieldData, toReference[cacheId]];
      //       },
      //     },
      //   });
      // },
    });
  };

  //DATA
  // console.log(errorList);
  const columns = React.useMemo(
    () => [
      {
        Header: "ID",
        accessor: "id",
      },
      {
        Header: "Title",
        accessor: "title",
        filter: "fuzzyText",
      },
      {
        Header: "Description",
        accessor: "description",
        filter: "fuzzyText",
      },
    ],
    []
  );
  console.log("alldata", data);

  return (
    <>
      <div
        className={
          "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " +
          (color === "light" ? "bg-white" : "bg-blue-900 text-white")
        }
      >
        <div className="block w-full overflow-x-auto">
          {/* Projects table */}
          {loadingList && (
            <div
              className={
                "text-white px-6 py-4 border-0 rounded relative mb-4 bg-blue-500"
              }
            >
              Loading data ...
            </div>
          )}
          {data && (
            <Table color="light" columns={columns} data={data?.allPosts} />
          )}
          <button onClick={addNewList}>Add Todo</button>
        </div>
      </div>
    </>
  );
}

CustomTable.defaultProps = {
  color: "light",
};

CustomTable.propTypes = {
  color: PropTypes.oneOf(["light", "dark"]),
};
