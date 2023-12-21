import { Card } from '../../UI/Card/Card'

const Content2: React.FC<{ id: string }> = ({ id }) => {
  return (
    <article id={id}>
      <Card>content2</Card>
    </article>
  )
}

export default Content2
