import React from "react";
import { createId } from "../../../chest/utils";
import { Fieldset } from "./styles";



export default function Search({items, query, setQuery}) {



    return <> 
        <Fieldset>
            <legend>Buscar</legend>
            <div>
                <input value={query} onChange={(e)=>setQuery(e.target.value)} list="data-list"/>

                <datalist id="data-list">
                    {items && items.map(item=> (
                        <option value={item} key={createId()} />
                    ))}
                </datalist>
            </div>
        </Fieldset>
    </>;
}