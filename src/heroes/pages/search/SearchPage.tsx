import { CustomJumbotron } from "@/components/ui/custom/CustomJumbotron";
import { HeroStats } from "@/heroes/components/HeroStats";
import { SearchControls } from "./ui/SearchControls";
import { CustomBreadcrums } from "@/components/ui/custom/CustomBreadcrums";
import { HeroGrid } from "@/heroes/components/HeroGrid";
import { useQuery } from "@tanstack/react-query";
import { searchHeroesAction } from "@/heroes/actions/search-heroes-action";
import { useSearchParams} from "react-router";


export const SearchPage = () => {

  const [searchParams] = useSearchParams();

  const name = searchParams.get('name') || undefined;
  const strength = searchParams.get('strength') || undefined;

  const { data: heroes = [] } = useQuery({
    queryKey: ['searchHeroes', { name }],
    queryFn: () => searchHeroesAction({ name }),
    staleTime: 1000 * 60 * 5, // 5 minutes
  });


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

      <HeroGrid heroes={heroes} />
    </>
  )
}

export default SearchPage;