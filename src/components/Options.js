import '../styles/Options.scss';

import { NavLink } from 'react-router-dom';

export const Options = (props) => {
  const handlePrevent = (ev) => {
    ev.preventDefault();
  };
  const handleChange = (ev) => {
    props.userWord(ev.target.value);
  };
  return (
    <>
      <form className='user__form' onSubmit={handlePrevent}>
        <label className='title' htmlFor='word'>
          Escribe aquí la palabra que hay que adivinar:
        </label>
        <input
          autoFocus
          autoComplete='off'
          className='form__input'
          maxLength='15'
          type='text'
          id='word'
          name='word'
          onChange={handleChange}
        />
        <NavLink to='/' className='user__button'>
          Jugar
        </NavLink>
        <small className='underconstruction'>
          *Esta opción aún no está desarrollada completamente
        </small>
      </form>
    </>
  );
};
