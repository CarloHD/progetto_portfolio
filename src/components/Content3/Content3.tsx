import { Card } from '../../UI/Card/Card'

const Content3: React.FC<{ id: string }> = ({ id }) => {
  return (
    <article id={id}>
      <Card>content 3</Card>
    </article>
  )
}

export default Content3
