import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import googleImg from '../assets/images/google-icon.svg';
import '../styles/auth.scss';
import { Button } from '../components/Button';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/auth';

export function Home() {
  const { user, signInWithGoogle } = useAuth();
  const navigate = useNavigate();


  const handleCreateRoom = async () => {
    if (!user) {
      await signInWithGoogle();
    }

    navigate('/room/new');
  }

  return (
    <div id='page-auth'>
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

          <button
            className='login-social-button'
            onClick={handleCreateRoom}
          >
            <img
              src={googleImg}
              alt='google'
            />
            Cria sua sala com o Google
          </button>

          <div className='divider-content-main'>
            <p>ou entre em uma sala</p>
          </div>

          <form>
            <input
              type='text'
              placeholder='Digite o código da sala'
            />
            <Button type='submit'>Entrar na sala</Button>
          </form>
        </div>
      </main>
    </div>
  );
}
