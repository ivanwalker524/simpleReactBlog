interface Props {
  name: string;
  email: string;
  age: number;
  isMarried: boolean;
  friends: string[];
  country: Country;
}

export enum Country {
  Uganda = "Uganda",
  Kenya = "Kenya",
  Tanzania = "Tanzania"
}
export const Person = (props:Props) => {
  return (
    <>
      <h1>Name: {props.name}</h1>
      <h2>:Age {props.age}</h2>
      <h1>Email: {props.email}</h1>
      <h1>This person {props.isMarried ? "is" : "is not"} married</h1>
      <h1>Friends</h1>
      {props.friends.map((friends) => {
        return <p key={Math.random()}>{friends}</p>
      })}
      <h1>Country:{props.country}</h1>
    </>
)
}