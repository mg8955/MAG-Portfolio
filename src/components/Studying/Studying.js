import uniqid from 'uniqid'
import { studyingFor } from '../../portfolio'
import './Studying.css'

const Studying = () => {
    if (!studyingFor.length) return null
  
    return (
      <section className='section skills' id='skills'>
        <h2 className='section__title'>Currently Studying</h2>
        <ul className='skills__list'>
          {studyingFor.map((item) => (
            <li key={uniqid()} className='skills__list-item btn btn--plain'>
              {item}
            </li>
          ))}
        </ul>
      </section>
    )
  }

export default Studying