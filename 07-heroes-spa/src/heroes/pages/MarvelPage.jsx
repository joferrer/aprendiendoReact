import { HeroList } from "../components/HeroList"


export const MarvelPage = () => {
  const publicher = 'Marvel Comics';
  return (
    <div>
      <h1>{publicher}</h1>
      <hr />

      <HeroList publicher={publicher}/>

    </div>
  )
}
