import SearchLine from "../searchLine";

export default function SearchBody({ config }) {
  return (
    <div>
      {config.map(item => (
        <SearchLine key={item.title} data={item}/>
      ))}
    </div>
  )
}