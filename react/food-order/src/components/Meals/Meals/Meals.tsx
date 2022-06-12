import { FC, Fragment } from "react";
import AvailableMeals from "../AvailableMeals/AvailableMeals";
import MealsSummary from "../MealsSummary/MealsSummary";

interface Props {}

const Meals: FC<Props> = () => {
  return (
    <Fragment>
      <MealsSummary />
      <AvailableMeals />
    </Fragment>
  );
};

export default Meals;
