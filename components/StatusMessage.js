export function StatusMessage( props ) {
  const {
    children = <><strong>Holy guacamole!</strong> You should check in on some of those fields below.</>,
    status = "success",
  } = props;

  switch (status) {
    case "error":
      return (
        <div
          className={"alert alert-danger alert-dismissible fade show"}
          role="alert"
        >
          {children}
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
          ></button>
        </div>
      );
      break;

    default:
      return (
        <div
          className={"alert alert-success alert-dismissible fade show"}
          role="alert"
        >
        {children}
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
          ></button>
        </div>
      );
      break;
  }
}
