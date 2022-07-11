import { useNavigate } from 'react-router-dom';
import s from './GoBackButton.module.css';

export default function GoBackButton({ to }) {
  const navigate = useNavigate();
  const onGoBackButtonClick = e => {
    navigate(to);
  };

  return (
    <>
      <button type="button" onClick={onGoBackButtonClick} className={s.button}>
        Back
      </button>
    </>
  );
}
