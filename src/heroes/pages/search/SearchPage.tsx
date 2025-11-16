import { CustomJumbotron } from "@/components/ui/custom/CustomJumbotron";
import { HeroStats } from "@/heroes/components/HeroStats";
import { SearchControls } from "./ui/SearchControls";
import { CustomBreadcrums } from "@/components/ui/custom/CustomBreadcrums";


export const SearchPage = () => {
  return (
    <>
      <CustomJumbotron 
        title="Busqueda de Heroes" 
        description="Descrubre y explora y administra super heroes y villanos" 
      />

      <CustomBreadcrums currentPage="Buscador de Heroes" breadcrumbs={[
        /* { label: "Home", to: "/" }, */
        /* { label: "Busqueda", to: "/search" }, */
      ]} />

      {/* Stats Dashboard */}
      <HeroStats />

      {/* filter and search */}
      <SearchControls />
    </>
  )
}

export default SearchPage;