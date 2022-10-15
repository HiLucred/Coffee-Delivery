import { CoffeesList } from "../../../../data/CoffeesList";
import { CoffeCard } from "../CoffeCard";
import { CoffeListContainer, TitleList } from "./styles";

export function CoffeeList() {
  return (
    <>
      <TitleList>Nossos cafés</TitleList>

      <CoffeListContainer>
        {CoffeesList.map((coffee) => (
          <CoffeCard key={coffee.id} coffee={coffee} />
        ))}
      </CoffeListContainer>
    </>
  );
}
