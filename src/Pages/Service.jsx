import React, { useState, useEffect } from "react";
import NewService from "../Components/Servic/NewService";
import { Heading } from "@chakra-ui/react";

const Service = () => {
  const [pageData, setPageData] = React.useState([]);

  useEffect(() => {
    fetch(`https://gleaming-plum-long-johns.cyclic.app/services`)
      .then((res) => res.json())
      .then((data) => {
        setPageData(data.data);
        // console.log(data.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      {pageData.length == 0 ? (
        <Heading
          padding={"250px 0px 0px 40px"}
          textAlign="center"
          color="#FF7135"
          as="h2"
          size="xl"
        >
          {`Loading..........`}
        </Heading>
      ) : (
        pageData?.map((ele) => (
          <NewService
            key={ele._id}
            allTypes={ele}
            services={ele.services}
          />
        ))
      )}
    </div>
  );
};

export default Service;
