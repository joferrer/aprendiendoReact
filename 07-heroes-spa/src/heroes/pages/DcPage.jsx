import { HeroList } from "../components/HeroList";


export const DcPage = () => {
  const publicher = 'DC Comics';
  return (
    <div>
      <h1>{publicher}</h1>
      <hr />

      <HeroList publicher={publicher}/>

    </div>
  )
}
