import React from 'react'
import "../../pages/menu/styles/Menu.css"
import Button from '../Button/Button'
import { Link } from 'react-router-dom'
import ModalFollow from '../ModalFollow/ModalFollow'

const MenuButtons = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <div>
        <div className="menu-buttons">
            <Link to={"/recitales"}>
            <Button variant="primary">Recitales</Button>
            </Link>
            <Button variant="primary" onClick={() => setOpen(true)}>
            Seguinos
            </Button>

      </div>
        <ModalFollow open={open} onClose={() => setOpen(false)} />
    </div>

  )
}

export default MenuButtons
