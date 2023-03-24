
import React from 'react'
import { Contanier,Input } from './stayle'

export const SearchModal=({handleOk,handleCancel,isModalOpen}) => {
   
  return (
    <div>
<Contanier title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
         <Input placeholder='Search...'/>
      </Contanier>

    </div>
  )
}

export default SearchModal