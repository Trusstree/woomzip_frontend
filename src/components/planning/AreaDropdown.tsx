"use client"

export default function AreaDropdown() {

    return(
        <div className="dropdown">
            <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            style={{width:"30%"}}>
              면적 선택
            </button>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">50평 이하</a></li>
              <li><a className="dropdown-item" href="#">51~60평</a></li>
              <li><a className="dropdown-item" href="#">61~70평</a></li>
              <li><a className="dropdown-item" href="#">71~80평</a></li>
              <li><a className="dropdown-item" href="#">81~90평</a></li>
              <li><a className="dropdown-item" href="#">91~100평</a></li>
              <li><a className="dropdown-item" href="#">100평 이상</a></li>
            </ul>
          </div>
    )
}