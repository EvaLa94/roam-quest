export default function ListItem(props) {
  return (
    <div>
      <p>
        {props.result.name}
        <span
          className={"fi fi-" + props.result.address.countryCode.toLowerCase()}
        ></span>
      </p>
    </div>
  );
}
