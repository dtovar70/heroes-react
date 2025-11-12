import { CustomJumbotron } from "@/components/ui/custom/CustomJumbotron";
import { HeroStats } from "@/heroes/components/HeroStats";
import { SearchControls } from "./ui/SearchControls";


export const SearchPage = () => {
  return (
    <>
      <CustomJumbotron 
        title="Busqueda de Heroes" 
        description="Descrubre y explora y administra super heroes y villanos" 
      />

      {/* Stats Dashboard */}
      <HeroStats />

      {/* filter and search */}
      <SearchControls />
    </>
  )
}

export default SearchPage;