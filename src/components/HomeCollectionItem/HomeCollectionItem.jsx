

export default function HomeCollectionItem({film}){
   
    return(
        <>
            <li>
                {film.original_title ?? film.original_name ?? film.title}
            </li>
        </>
    )
}
