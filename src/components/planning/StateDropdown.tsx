"use client"

export default function StateDropdown() {

    return(
        <div className="dropdown">
            <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            style={{width:"30%"}}>
              도시 선택
            </button>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">서울특별시</a></li>
              <li><a className="dropdown-item" href="#">경기도</a></li>
              <li><a className="dropdown-item" href="#">강원도</a></li>
              <li><a className="dropdown-item" href="#">경상북도</a></li>
              <li><a className="dropdown-item" href="#">경상남도</a></li>
              <li><a className="dropdown-item" href="#">전라북도</a></li>
              <li><a className="dropdown-item" href="#">전라남도</a></li>
              <li><a className="dropdown-item" href="#">충청북도</a></li>
              <li><a className="dropdown-item" href="#">충청남도</a></li>
              <li><a className="dropdown-item" href="#">제주특별자치시</a></li>
            </ul>
          </div>
    )
}