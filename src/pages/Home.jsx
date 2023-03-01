import React, { useState, useEffect} from 'react';
import {getAllCategories } from '../api';
import {Preloader} from '../components/Preloader';
import { CategoryList } from '../components/CategoryList';

function Home() {
    const [catalog, setCatalog] = useState([]);

    useEffect(() => {
        getAllCategories().then(data => {
            setCatalog(data.categories);
        })
    }, []);
    return <div>
        { catalog.length ? 
            <CategoryList catalog={catalog}/> 
            : <Preloader/>
        }
    </div>
}

export {Home};