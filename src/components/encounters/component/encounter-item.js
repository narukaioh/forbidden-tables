
const ItemType = ({ type }) => {
  if (type) {
    return (<p><strong className="type">Tipos de Terreno:</strong> {type}</p>)
  }
  return null
}

const EncounterItem = ({ item }) => {
  return (<div className="encounter-item">
    <h1>{item.title}</h1>
    <p className="resume">{item.resume}</p>
    <p className="description">{item.description}</p>
    <ItemType type={item.type} />
    <div className="table">{item.table}</div>
  </div>)
}

export default EncounterItem