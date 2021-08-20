import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import ListaComentarios from './components/ListaComentarios';
import Comentario from './components/Comentario';

function App() {
  const comentarios = [
    {
      avatar: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
      dataHora: '11/04/2021 13:19:00',
      conteudo: 'Primeiro Comentário.'
    },
    {
      avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
      dataHora: '11/04/2021 14:03:19',
      conteudo: 'Segundo Comentário.'
    },
    {
      avatar: 'https://images.unsplash.com/photo-1614436163996-25cee5f54290?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=381&q=80',
      dataHora: '15/04/2021 09:47:00',
      conteudo: 'Terceiro Comentário.'
    },
  ]
  return (
    <ListaComentarios>
      {comentarios.map((item, index) => (
        <Comentario
          avatar={item.avatar}
          dataHora={item.dataHora}
          conteudo={item.conteudo}
          key={index}
        />
      ))}
    </ListaComentarios>
  );
}

export default App;