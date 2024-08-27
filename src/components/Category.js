import React from 'react';
import Widget from './Widget';
import { Box, Button, Typography } from '@mui/material';

const Category = ({ category, onAddWidget }) => {
  return (
    <Box mb={4} style={{ backgroundColor: '#e3f2fd', padding: '10px', borderRadius: '5px' }}>
      <Typography variant="h6" style={{ color: '#1976d2' }}>{category.name}</Typography>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => onAddWidget(category)}
        style={{ marginBottom: '10px', backgroundColor: '#4caf50', color: '#fff' }}
      >
        + Add Widget
      </Button>
      <Box display="flex" flexWrap="wrap" gap={2}>
        {category.widgets.map(widget => (
          <Widget key={widget.id} widget={widget} categoryId={category.id} />
        ))}
      </Box>
    </Box>
  );
};

export default Category;
