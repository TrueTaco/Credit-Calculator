import { useState } from "react";
import SelectionField from "../../Generics/SelectionField";
import Dataframe from "./Dataframe";

const Table = () => {
  const [dataOption, setDataOption] = useState<string>("");

  return (
    <div className="flex w-full flex-col items-center">
      <SelectionField
        options={[
          "Mtl. Tilugung und Zinsen",
          "Monatliche Rate",
          "Restschulden",
        ]}
        value={dataOption}
        setValue={setDataOption}
      />
      <Dataframe />
    </div>
  );
};

export default Table;
