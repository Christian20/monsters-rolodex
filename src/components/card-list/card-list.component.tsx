import { Monster } from '../../App';
import Card from '../card/card.component';
import './card-list.styles.css';

type CardListProps = {
  monsters: Monster[];
}

const CardList = ({ monsters }: CardListProps) => ( // destructuring 'monsters' from 'props' object
  <div className='card-list'>
    {monsters.map((monster) => {
      return (
        <Card key={monster.id} monster={monster} />
      )
    })}
  </div>
)

export default CardList;