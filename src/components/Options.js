import '../styles/Options.scss';
import { NavLink } from 'react-router-dom';

export const Options = () => {
  return (
    <>
      <form className='user__form'>
        <label className='title' htmlFor='user__word'>
          Incluye la palabra con la que quieres jugar:
        </label>
        <input
          autoComplete='off'
          className='user__form__input'
          type='text'
          name='user__word'
          id='user__word'
        />
        <NavLink to='/userGame' className='user__button'>
          Jugar
        </NavLink>
      </form>
    </>
  );
};
