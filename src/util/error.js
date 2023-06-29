export default function Error(props) {
  return (
    <div
      style={{ textAlign: "center", width: "830px" }}
      className="alert alert-danger"
      role="alert"
    >
      {props.message}
    </div>
  );
}