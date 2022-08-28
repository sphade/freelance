import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";

const Services = () => {
  const params = useParams();
  const [count, setCount] = useState(1);
  let [searchParams, setSearchParams] = useSearchParams();

  return (
    <div className="space-y-5 font-se">
      <button
        onClick={() => {
          setSearchParams({ counts: "2" });
          const c = searchParams.get("counts");
          setCount(c as unknown as number);
        }}
      >

        click me
      </button>
      {count}
    </div>
  );
};

export default Services;
