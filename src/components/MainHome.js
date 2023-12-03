import '../css/mainhome.css'
import CardPersonalizado from './CardPersonalizado';
import Paginacao from './Paginacao';

function MainHome() {
  return (
    <>
    <section className='primeira-secao'>
      <main className='mainhome'>
        <CardPersonalizado/>
        <CardPersonalizado/>
        <CardPersonalizado/>
        <CardPersonalizado/>
        <CardPersonalizado/>
        <CardPersonalizado/>
        <CardPersonalizado/>
        <CardPersonalizado/>
      </main>
      <Paginacao/>
    </section>
    </>
  );
}

export default MainHome;