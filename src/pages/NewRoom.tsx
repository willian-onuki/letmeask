import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import { Button } from '../components/Button';
import { Link } from 'react-router-dom';

import '../styles/newRoom.scss';

export function NewRoom() {

  return (
    <div id='page-new-room'>
      <aside>
        <img
          src={illustrationImg}
          alt='Ilustração de perguntas e respostas'
        />
        <strong>Crie salas de Q&amp;A ao-vivo</strong>
        <p>Aprenda e compartilhe conhecimento com outras pessoas</p>
      </aside>
      <main>
        <div className='main-content'>
          <img
            src={logoImg}
            alt='logo'
          />

          <h2 className='title-content-main'>Crie uma nova sala</h2>

          <form>
            <input
              type='text'
              placeholder='Nome da sala'
            />
            <Button type='submit'>Criar sala</Button>
          </form>
          <p className='navigate-existent-room'>
            Quer entrar em uma sala já existente?{' '}
            <Link to='/'>Clique aqui</Link>
          </p>
        </div>
      </main>
    </div>
  );
}
