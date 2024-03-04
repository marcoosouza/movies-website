import { categories } from "../../constants/categories";
import Dropdown from "../Dropdown/Dropdown";
import { Options } from "../Dropdown/styles";

type FilterProps = {
    onGenreChange: (genre: string) => void;
  };

function Filter({ onGenreChange }: FilterProps): JSX.Element {
    const options = categories.map((options) => {
        return <Options key={options.id} onClick={() => onGenreChange(options.name)}>{options.name}</Options>
    });

    return (
        <>
            <Dropdown title={"Genres"} options={options}></Dropdown>
        </>
    )
}

export default Filter