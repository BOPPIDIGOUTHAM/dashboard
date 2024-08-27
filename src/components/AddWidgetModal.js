import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addWidget } from '../store/actions';
import { Box, Modal, TextField, Button } from '@mui/material';

const AddWidgetModal = ({ category, onClose }) => {
  const [name, setName] = useState('');
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(addWidget(category.id, { id: Date.now(), name, text }));
    onClose();
  };

  return (
    <Modal open={true} onClose={onClose}>
      <Box
        p={3}
        bgcolor="background.paper"
        style={{
          width: '300px',
          margin: '100px auto',
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          backgroundColor: '#ffffff',
          border: '2px solid #1976d2',
          borderRadius: '8px'
        }}
      >
        <TextField
          label="Widget Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          fullWidth
        />
        <TextField
          label="Widget Text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          multiline
          rows={4}
          fullWidth
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleAdd}
          style={{ backgroundColor: '#1976d2', color: '#fff' }}
        >
          Add Widget
        </Button>
        <Button
          variant="outlined"
          onClick={onClose}
          style={{ color: '#1976d2', borderColor: '#1976d2' }}
        >
          Close
        </Button>
      </Box>
    </Modal>
  );
};

export default AddWidgetModal;
