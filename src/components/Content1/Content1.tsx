import { Card } from '../../UI/Card/Card'

import styles from './Content1.module.css'

const Content1: React.FC<{ id: string }> = ({ id }) => {
  return (
    <article id={id} className={styles.content1}>
      <Card>
        <img src='' alt='foto personale' />
        <section>
          <h1>
            <span id='cognome'>Borrometi</span>
            <span id='nome'>Carlo</span>
          </h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Dignissimos quibusdam ipsum tempore ducimus aliquid quisquam
            officiis, aut, odit porro quae itaque voluptas. Officia at nulla
            aspernatur quam iste! Eveniet, vel! <br />
          </p>
        </section>

        <h2>Frontend Developer</h2>
      </Card>
    </article>
  )
}

export default Content1
