import { useState , useEffect} from 'react'
import fetchRequest from '../service/fetchRequest'


export default function Home (){
    const [film, setFilm] = useState(null);

    useEffect(() =>{
        fetchRequest().then(setFilm);
    }, [])
}