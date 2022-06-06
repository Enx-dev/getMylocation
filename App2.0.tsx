import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import React, { useState } from "react";
import { LocationAPI, useGetLocationQuery } from "./src/Api";
import Header from "./src/components/header/Header";
import Map from "./src/components/map/Map";

type Props = {};

const App2 = (props: Props) => {
  const [ip, setIP] = useState<string>();
  const { data, isFetching } = useGetLocationQuery(ip);
  return (
    <section>
        <Header data={data} isFetching={isFetching} setIp={setIP} />
        <Map data={data} isFetching={isFetching}/>
    </section>
  );
};

export default App2;
