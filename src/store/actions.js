export const ADD_WIDGET = 'ADD_WIDGET';
export const REMOVE_WIDGET = 'REMOVE_WIDGET';
export const SEARCH_WIDGETS = 'SEARCH_WIDGETS';

export const addWidget = (categoryId, widget) => ({
  type: ADD_WIDGET,
  payload: { categoryId, widget }
});

export const removeWidget = (widgetId, categoryId) => ({
  type: REMOVE_WIDGET,
  payload: { widgetId, categoryId }
});

export const searchWidgets = (query) => ({
  type: SEARCH_WIDGETS,
  payload: query
});
