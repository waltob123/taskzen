import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import Loading from "./Loading";

const Task = () => {
  const { id } = useParams();
  const { data, error, isPending } = useFetch("http://localhost:8000/tasks/" + id);
  console.log(id);
  console.log(data);
  return (
    <>
      <section className="about">
        <h3>Task - {id}</h3>
        {isPending && <Loading />}
        {error && <div>{error}</div>}
        {data && <p>{data.task}</p>}
      </section>
    </>
  );
};

export default Task;
