import Menu from "../components/menu"

const PageDefault = ({ children }) => {
  return (
    <div className="app">
      <Menu />
      {children}
      <footer>
        <span className="developed-by">
          by <a href="https://github.com/narukaioh">@narukaioh</a>
        </span>
      </footer>
    </div>
  )
}

export default PageDefault