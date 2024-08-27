import React from 'react';
import { useDispatch } from 'react-redux';
import { removeWidget } from '../store/actions';
import { Card, CardContent, Typography, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const Widget = ({ widget, categoryId }) => {
  const dispatch = useDispatch();

  return (
    <Card variant="outlined" style={{ width: '200px', position: 'relative', backgroundColor: '#ffeb3b' }}>
      <CardContent>
        <Typography variant="h6" gutterBottom style={{ color: '#f44336' }}>
          {widget.name}
        </Typography>
        <Typography variant="body2" style={{ color: '#37474f' }}>
          {widget.text}
        </Typography>
        <IconButton
          onClick={() => dispatch(removeWidget(widget.id, categoryId))}
          style={{ position: 'absolute', top: 0, right: 0, color: '#f44336' }}
        >
          <DeleteIcon />
        </IconButton>
      </CardContent>
    </Card>
  );
};

export default Widget;
