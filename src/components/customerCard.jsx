import * as React from 'react';
import { useState } from 'react'


import {
    Card,
    CardHeader,
    CardActions,
    Avatar,
    IconButton
} from '@mui/material';

import { red } from '@mui/material/colors';


import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

import ModalConfirm from './modalConfirm'

import MoreVertIcon from '@mui/icons-material/MoreVert';



const CustomerCard = ({ 
    id,
    name, 
    lastname, 
    email, 
    avatar, 
    onRemoveCustomer,
    onEditCustomer,
  }) => {

  const [openModal, setOpenModal] = useState(false)

  const handleToggleOpenModal = () => { 
    setOpenModal(!openModal)
  }

  const handleConfirmModal = id => {
    onRemoveCustomer(id)
    handleToggleOpenModal()
  }

  const handleRemoveCustomer = () => {
    handleToggleOpenModal()
  }

  const handleEditCustomer = id => {
    onEditCustomer(id)
  }

  return (
    <>
      <Card sx={{ minWidth: 300 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe" src={avatar}>
              M
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={`${name} ${lastname}`}
          subheader={email}
        />
        <CardActions disableSpacing>
          <IconButton aria-label="editar cadastro" onClick={() => handleEditCustomer(id)}>
            <EditIcon />
          </IconButton>
          <IconButton aria-label="deletar cadastro" onClick={handleRemoveCustomer}>
            <DeleteIcon />
          </IconButton>
        
        </CardActions>

      </Card>

      <ModalConfirm 
      open={openModal}
      onClose={handleToggleOpenModal}
      onConfirm={() => handleConfirmModal(id)}
      title="Deseja realmente excluir este cadastro?"
      message="Ao confirmar não será possível reverter esta operação."
      />
    </>
  );
}

export default CustomerCard