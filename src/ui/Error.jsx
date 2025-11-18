import { useSelector } from "react-redux";

function Error({ message }) {
  const { status: projectsDataStatus } = useSelector((state) => state.projects);

  return (
    <div className="row-span-full col-start-2 col-span-1 w-290 mx-auto h-full flex items-center justify-center -z-10 max-phone-lg:w-screen">
      {projectsDataStatus === "loading" ? (
        <Spinner />
      ) : (
        <>
          <h1 className="w-[80%] text-6xl font-bold text-text-helper text-center mb-30 leading-20 tracking-tight">
            Something went wrong! Unable to fetch projects
          </h1>
          <p className="text-3xl">({message})</p>
        </>
      )}
    </div>
  );
}

export default Error;
