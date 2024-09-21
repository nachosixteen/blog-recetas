export default function Menu() {
  return (
    <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
      <div class="container">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active" href="#">
              Active
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Link
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Link
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" href="#">
              Disabled
            </a>
          </li>
        </ul>
        <div>
          <div class="input-group flex-nowrap">
            <span class="input-group-text" id="addon-wrapping">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-search"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
              </svg>
            </span>
            <input
              type="text"
              class="form-control"
              placeholder="Buscar receta..."
              aria-label="Username"
              aria-describedby="addon-wrapping"
            />
          </div>
        </div>
      </div>
    </nav>
  );
}
