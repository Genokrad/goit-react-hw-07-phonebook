import { getFilter } from '../filter/filterSelector';
export const getUser = state => state.contacts.items;

export const filterContacts = state => {
  const tasks = getUser(state);
  const filter = getFilter(state);

  return tasks.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
};

// export const selectTasks = state => state.tasks.items;
// export const selectIsLoading = state => state.tasks.isLoading;
// export const selectError = state => state.tasks.error;
// export const selectStatusFilter = state => state.filters.status;
// export const selectVisibleTasks = state => {
//   // Используем другие селекторы
//   const tasks = selectTasks(state);
//   const statusFilter = selectStatusFilter(state);
//   switch (statusFilter) {
//     case statusFilters.active:
//       return tasks.filter(task => !task.completed);
//     case statusFilters.completed:
//       return tasks.filter(task => task.completed);
//     default:
//       return tasks;
//   }
// };
