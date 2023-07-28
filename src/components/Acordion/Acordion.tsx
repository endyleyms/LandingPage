import Dropdown from 'react-bootstrap/Dropdown';
import './Acordion.css'

const Acordion = (props: { title: string, options: any }) => {
  const { title, options = [] } = props
  return (
    <div className='acordion'>
      <Dropdown>
        <Dropdown.Toggle variant="dark" id="dropdown-basic">
          {title}
        </Dropdown.Toggle>
        <Dropdown.Menu>
          {options?.map((item: string, i: number) => (
            <Dropdown.Item key={i}>{item}</Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  )
}

export default Acordion
