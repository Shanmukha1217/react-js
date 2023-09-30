import { useLoaderData } from "react-router-dom";

const Github = () => {
  const myObj = useLoaderData();
  console.log(myObj);

  return (
    <div className="bg-blue-100" style={{ height: "595px" }}>
      <div className=" bg-gray-700 w-screen flex justify-center items-center text-3xl font-semibold text-white">
        Github Followers : {myObj.followers}
      </div>
      <div className="flex gap-5 w-full justify-center">
        <img className="rounded-lg" src={myObj.avatar_url} alt="my-image" />
        <div>
          <h1>Full Name: {myObj.name}</h1>
          <h1>Works at : {myObj.company}</h1>
          <h1>Lives in : {myObj.location}</h1>
        </div>
      </div>
    </div>
  );
};

export default Github;
