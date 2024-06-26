import { useEffect, useState } from "react";
import useAuthContext from "./useAuthContext";

const useJobAppliesByEmail = () => {
  const { user } = useAuthContext();
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      `https://job-house-server.vercel.app/jobAppliesByEmail?email=${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [user?.email]);

  return data;
};

export default useJobAppliesByEmail;
