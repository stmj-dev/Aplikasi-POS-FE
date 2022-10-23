import Link from "next/link";

export default function Sidebar() {
  return (
    <div>
      <button
        className="btn btn-primary"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasWithBothOptions"
        aria-controls="offcanvasWithBothOptions"
      >
        <i className="bi bi-arrow-right-square"></i>
      </button>

      <div
        className="offcanvas offcanvas-start w-25"
        data-bs-scroll="true"
        tabIndex="-1"
        aria-expanded="false"
        id="offcanvasWithBothOptions"
        aria-labelledby="offcanvasWithBothOptionsLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">
            <i className="bi bi-list"></i> Menu
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <div className="py-1 mt-1">
            <ul class="list-group list-group-flush">
              <li class="list-group-item"><Link href={'/'}><a className="text-decoration-none">Home</a></Link></li>
              <li class="list-group-item"><Link href={'/transaksi'}><a className="text-decoration-none">Transaksi</a></Link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
