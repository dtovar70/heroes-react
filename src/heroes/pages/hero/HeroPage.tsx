import { useParams } from "react-router-dom"

export const HeroPage = () => {

  const { idSlug } = useParams();
  
  return (
    <div>{idSlug}</div>
  )
}
