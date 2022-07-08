import { useLocation , useNavigate } from 'react-router-dom'
import s from './GoBackButton.module.css';


export default function GoBackButton (){
const location = useLocation();
const navigate = useNavigate();
    const onGoBackButtonClick = e =>{
        navigate(location?.state?.from?.location ?? '/')
    }

    return (
        <button type="button" onClick={onGoBackButtonClick} className={s.button}>Back</button>
    )
}