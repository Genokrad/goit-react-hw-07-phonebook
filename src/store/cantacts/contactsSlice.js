import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContacts, deleteContact } from 'store/operations';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, state => {
        state.isLoading = false;
      })
      .addCase(addContacts.pending, state => {
        state.isLoading = true;
      })
      .addCase(addContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        // console.log(action.payload);
        state.items.push(action.payload);
      })
      .addCase(addContacts.rejected, state => {
        state.isLoading = false;
      })
      .addCase(deleteContact.pending, state => {
        state.isLoading = true;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        console.log(action.payload.id);
        state.items = state.items.filter(
          contact => contact.id !== action.payload.id
        );
      })
      .addCase(deleteContact.rejected, state => {
        state.isLoading = false;
      });
  },
  // deleteContact
  // {
  //   [fetchContacts.pending]: () => console.log('pending'),
  //   [fetchContacts.fulfilled]: (state, action) => console.log('fulfilled'),
  //   [fetchContacts.rejected]: () => console.log('rejected'),
  // },
});

export const { setUsers, deleteUsers } = usersSlice.actions;
// export default usresSlice.reducer;
