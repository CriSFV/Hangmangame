import '../styles/Instructions.scss';
import { NavLink } from 'react-router-dom';

const Instructions = () => {
  return (
    <section className='instructions'>
      <p>
        Haz click donde indica "Escribe una letra" y escribe tu letra para
        adivinar la palabra secreta aleatoria. Si fallas la letra te indicará si
        has acertado, ya que se escribirá en su posición correspondiente de la
        solución y si no, se añadirá a las letras falladas. Ten cuidado o lo
        ahorcarás.
      </p>
      <NavLink to='/' className='user__button'>
        ¡A jugar!
      </NavLink>
      <p>
        También tienes otra manera de jugar si estás en grupo... en 'Mas
        opciones' escribe la palabra que quieras sin que te vean...{' '}
      </p>
      <NavLink to='/options' className='user__button'>
        ¡Escribe tu palabra!
      </NavLink>
    </section>
  );
};
export default Instructions;
