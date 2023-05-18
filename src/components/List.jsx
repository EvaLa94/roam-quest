import ListItem from "./ListItem";

export default function List({ data }) {
  return (
    <>
      {data.map((result, index) => (
        <ListItem key={index} result={result} />
      ))}
    </>
  );
}
