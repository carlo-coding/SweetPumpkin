import React from "react";
import { createId } from "../../../chest/utils";



export default function Search({items, query, setQuery}) {



    return <> 
        <fieldset>
            <legend>Buscar</legend>
            <div>
                <input value={query} onChange={(e)=>setQuery(e.target.value)} list="data-list"/>

                <datalist id="data-list">
                    {items && items.map(item=> (
                        <option value={item} key={createId()} />
                    ))}
                </datalist>
            </div>
        </fieldset>
    </>;
}