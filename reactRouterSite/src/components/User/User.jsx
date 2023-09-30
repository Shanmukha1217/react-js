import { useParams } from "react-router-dom";
import { getData } from "../loader";
import { useEffect, useState } from "react";

const User = () => {
  const [data, setData] = useState({});
  const { userId } = useParams();
  useEffect(() => {
    getData(userId).then((data) => setData(data));
  }, [userId]);

  return (
    <div className="bg-blue-100" style={{ height: "595px" }}>
      <div className=" bg-gray-700 w-screen flex justify-center items-center text-3xl font-semibold text-white">
        Github Followers : {data.followers}
      </div>
      <div className="flex gap-5 w-full justify-center">
        <img className="rounded-lg" src={data.avatar_url} alt="my-image" />
        <div>
          <h1>Full Name: {data.name}</h1>
          <h1>Works at : {data.company}</h1>
          <h1>Lives in : {data.location}</h1>
        </div>
      </div>
    </div>
  );
};

export default User;
