import { ALL_ARTICLES_QUERY, GET_ALL_ARTICLES } from "@/queries/booky-blog";
import { useQuery } from "@apollo/client";
import getConfig from "next/config";
import React, { useEffect, useState } from "react";

const apiTest = process.env.NEXT_PUBLIC_BOOKY;
const pokeApi = process.env.POKEMON_API;

const AllArticlesPage = () => {
  const [pika, setPika] = useState();

  const {
    publicRuntimeConfig: { POKEMON_API },
  } = getConfig();
  const { data, loading, error } = useQuery(ALL_ARTICLES_QUERY);

  const getPikachu = async () => {
    try {
      const res = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu");
      const data = await res.json();
      setPika(data);
    } catch (e) {
      console.log(e);
    }
  };

  // useEffect(() => {
  //   console.log(pika);
  // }, [pika]);

  //   if (loading) {
  //     return <div>loading...</div>;
  //   }
  if (error) {
    return <div>something went wrong!</div>;
  }

  console.log(data);

  return (
    <div>
      tesing: {apiTest}
      <div>
        <button
          className="p-3  border-solid border-[black] border-[2px]"
          onClick={getPikachu}
        >
          Pika
        </button>
      </div>
    </div>
  );
};

export default AllArticlesPage;
