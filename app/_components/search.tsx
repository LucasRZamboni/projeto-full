import { SearchIcon } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const Search = () => {
    return ( 
        <div className="flex gap-1">
            <Input placeholder="Buscar restaurantes" className="border-none"/>
            <Button size={"icon"} className="w-12">
                <SearchIcon size={20}/>
                </Button>
        </div>
     );
}
 
export default Search;