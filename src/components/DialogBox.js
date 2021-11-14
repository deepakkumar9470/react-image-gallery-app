import React from 'react'
import {Dialog} from '@mui/material'





const DialogBox = ({photo,open,onClose}) => {

    const actions = [
        <button className="closeBtn" onClick={onClose}>X</button>
    ];

    
    return (
        <div>

        <Dialog
          actions={actions}
          modal={false}
          open={open}
          onRequestClose={onClose}
        >
          <img src={photo.currentImg} alt="" style={{ width: '100%' }} />
         </Dialog>
            
        </div>
    )
}

export default DialogBox
