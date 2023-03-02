import { useState } from "react";

function Search({cb = Function.prototype}) {
    const [value, setValue] = useState('');

    const handleKey = (e) => {
        if(e.key === 'Enter') {
            handleSubmit();
        }
    }

    const handleSubmit = () => {
        cb(value);
    }

    return <div className="row">
        <div className="input-field inline search-field">
        <input 
            placeholder="search" 
            type="search" 
            className="validate"
            value={value}
            onKeyDown={handleKey}
            onChange={(e) => setValue(e.target.value)}
            />
        </div>
        <div className="btn input-field inline right deep-orange accent-3" onClick={handleSubmit}>
        <span>Search</span>
      </div>
    </div>
}

export {Search};