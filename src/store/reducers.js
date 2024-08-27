import { ADD_WIDGET, REMOVE_WIDGET, SEARCH_WIDGETS } from './actions';

const initialState = {
  categories: [
    {
      id: '1',
      name: 'CSPM Executive Dashboard',
      widgets: [
        { id: '1', name: 'Widget 1', text: 'Random text for Widget 1' },
        { id: '2', name: 'Widget 2', text: 'Random text for Widget 2' }
      ]
    },
    {
      id: '2',
      name: 'Another Dashboard',
      widgets: [
        { id: '3', name: 'Widget 3', text: 'Random text for Widget 3' }
      ]
    }
  ]
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_WIDGET:
      return {
        ...state,
        categories: state.categories.map(category =>
          category.id === action.payload.categoryId
            ? { ...category, widgets: [...category.widgets, action.payload.widget] }
            : category
        )
      };
    case REMOVE_WIDGET:
      return {
        ...state,
        categories: state.categories.map(category =>
          category.id === action.payload.categoryId
            ? { ...category, widgets: category.widgets.filter(widget => widget.id !== action.payload.widgetId) }
            : category
        )
      };
    case SEARCH_WIDGETS:
      return {
        ...state,
        categories: state.categories.map(category => ({
          ...category,
          widgets: category.widgets.filter(widget =>
            widget.name.toLowerCase().includes(action.payload.toLowerCase())
          )
        }))
      };
    default:
      return state;
  }
};

export default reducer;
