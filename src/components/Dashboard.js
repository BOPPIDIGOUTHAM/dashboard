import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  Button,
  Modal,
  Box,
  TextField,
  IconButton,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import DeleteIcon from '@mui/icons-material/Delete';
import MoreVertIcon from '@mui/icons-material/MoreVert';

// JSON structure with sample data
const initialDashboardData = {
  categories: [
    {
      id: 1,
      name: "CSPM Executive Dashboard",
      widgets: [
        { id: 1, name: "Cloud Accounts", description: "2 Total", status: "Connected (2)", color: "#1976d2" },
        { id: 2, name: "Cloud Account Risk Assessment", description: "9659", status: "Failed (1889)", color: "#d32f2f" }
      ],
    },
    {
      id: 2,
      name: "CWPP Dashboard",
      widgets: [
        { id: 3, name: "Top 5 Namespace Specific Alerts", description: "No Graph data available!", color: "#757575" },
        { id: 4, name: "Workload Alerts", description: "No Graph data available!", color: "#757575" }
      ],
    },
    {
      id: 3,
      name: "Registry Scan",
      widgets: [
        { id: 5, name: "Image Risk Assessment", description: "1470 Total vulnerabilities", status: "Critical (9)", color: "#ff6f00" },
        { id: 6, name: "Image Security Issues", description: "2 Total images", status: "Critical (2)", color: "#ff6f00" }
      ],
    },
  ]
};

const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState(initialDashboardData);
  const [openModal, setOpenModal] = useState(false);
  const [newWidget, setNewWidget] = useState({ name: '', description: '', categoryId: null });

  const handleOpenModal = (categoryId) => {
    setNewWidget({ ...newWidget, categoryId });
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setNewWidget({ name: '', description: '', categoryId: null });
  };

  const handleAddWidget = () => {
    const updatedDashboard = dashboardData.categories.map(category => {
      if (category.id === newWidget.categoryId) {
        const newId = category.widgets.length ? category.widgets[category.widgets.length - 1].id + 1 : 1;
        return {
          ...category,
          widgets: [...category.widgets, { id: newId, name: newWidget.name, description: newWidget.description }],
        };
      }
      return category;
    });

    setDashboardData({ ...dashboardData, categories: updatedDashboard });
    handleCloseModal();
  };

  const handleDeleteWidget = (categoryId, widgetId) => {
    const updatedDashboard = dashboardData.categories.map(category => {
      if (category.id === categoryId) {
        return {
          ...category,
          widgets: category.widgets.filter(widget => widget.id !== widgetId),
        };
      }
      return category;
    });

    setDashboardData({ ...dashboardData, categories: updatedDashboard });
  };

  return (
    <div>
      <AppBar position="static" sx={{ backgroundColor: '#1976d2' }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            CNAPP Dashboard
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            sx={{ marginRight: '10px' }}
            startIcon={<MoreVertIcon />}
          >
            Last 2 days
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={() => handleOpenModal(null)}
          >
            Add Widget
          </Button>
        </Toolbar>
      </AppBar>
      <Container maxWidth="lg" sx={{ padding: '20px', backgroundColor: '#f5f5f5' }}>
        <Grid container spacing={3}>
          {dashboardData.categories.map((category) => (
            <Grid item xs={12} key={category.id}>
              <Typography variant="h5" sx={{ color: '#333', marginBottom: '10px' }}>
                {category.name}
              </Typography>
              <Grid container spacing={2}>
                {category.widgets.map((widget) => (
                  <Grid item xs={12} md={4} key={widget.id}>
                    <Card sx={{ backgroundColor: '#ffffff', boxShadow: 3, borderRadius: 2, position: 'relative' }}>
                      <CardContent>
                        <Typography variant="h6" sx={{ color: widget.color, fontWeight: 'bold' }}>
                          {widget.name}
                        </Typography>
                        <Typography variant="h4" sx={{ color: '#000', margin: '10px 0' }}>
                          {widget.description}
                        </Typography>
                        <Typography variant="body2" sx={{ color: '#757575' }}>
                          {widget.status}
                        </Typography>
                        <IconButton
                          aria-label="delete"
                          sx={{ position: 'absolute', top: 8, right: 8 }}
                          onClick={() => handleDeleteWidget(category.id, widget.id)}
                        >
                          <DeleteIcon />
                        </IconButton>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
                <Grid item xs={12} md={4}>
                  <Button
                    variant="outlined"
                    sx={{ height: '100%', width: '100%', borderStyle: 'dashed' }}
                    onClick={() => handleOpenModal(category.id)}
                  >
                    + Add Widget
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          ))}
        </Grid>

        <Modal open={openModal} onClose={handleCloseModal}>
          <Box
            sx={{
              width: 400,
              backgroundColor: 'white',
              padding: 4,
              borderRadius: 2,
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              boxShadow: 24,
              outline: 'none',
            }}
          >
            <Box display="flex" justifyContent="space-between" mb={2}>
              <Typography variant="h6">Add Widget</Typography>
              <IconButton onClick={handleCloseModal}>
                <CloseIcon />
              </IconButton>
            </Box>
            <TextField
              fullWidth
              label="Widget Name"
              variant="outlined"
              sx={{ marginBottom: 2 }}
              value={newWidget.name}
              onChange={(e) => setNewWidget({ ...newWidget, name: e.target.value })}
            />
            <TextField
              fullWidth
              label="Widget Description"
              variant="outlined"
              sx={{ marginBottom: 2 }}
              value={newWidget.description}
              onChange={(e) => setNewWidget({ ...newWidget, description: e.target.value })}
            />
            <Box mt={3} display="flex" justifyContent="flex-end">
              <Button
                variant="outlined"
                onClick={handleCloseModal}
                sx={{ marginRight: '10px' }}
              >
                Cancel
              </Button>
              <Button variant="contained" color="primary" onClick={handleAddWidget}>
                Add
              </Button>
            </Box>
          </Box>
        </Modal>
      </Container>
    </div>
  );
};

export default Dashboard;
