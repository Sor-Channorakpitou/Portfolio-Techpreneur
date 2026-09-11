import './App.css'

function StatusBadge({ isBusy }) {
  return <span
    className={isBusy ? "status gray" : "status green"}>
    {isBusy ? "Busy learning" : "Open to work"}
  </span>;
}

function App() {
  return (
    <>
      <h1>Sor Channorakpitou</h1>
      <p>Becoming a skillful front-end developer and ready for employment.</p>
      <StatusBadge isBusy={false} />
    </>
  )
}

export default App