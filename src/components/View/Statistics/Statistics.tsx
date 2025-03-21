import { useState } from "react";
import SelectionField from "../../Generics/SelectionField";

const Statistics = () => {
  const [dataOption, setDataOption] = useState<string>("");

  return (
    <div className="">
      <SelectionField
        options={[
          "Mtl. Tilugung und Zinsen",
          "Monatliche Rate",
          "Restschulden",
        ]}
        value={dataOption}
        setValue={setDataOption}
      />
    </div>
  );
};

export default Statistics;
