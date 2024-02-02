import { Person,Country } from "./components/Person"

export const PropTypeApp = () => {
  return (
    <Person
      name="Ivan"
      age={25}
      email="thecoder609@gmail.com"
      isMarried={false}
      friends={["Atiidu", "Rk", "Umar", "Ashraf", "Peter", "Alvin"]}
      country={Country.Uganda}
    />
  )
}