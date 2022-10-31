import { AnyAction, createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface stateTypes {
    books:
        | {
              title: string;
              subtitle: string;
              isbn13: string;
              price: string;
              image: string;
              url: string;
          }[]
        | null;
}

const initialState: stateTypes = {
    books: null,
};
// [
//         {
//             title: "Deno Succinctly",
//             subtitle: "",
//             isbn13: "9781642002140",
//             price: "$0.00",
//             image: "https://itbook.store/img/books/9781642002140.png",
//             url: "https://itbook.store/books/9781642002140",
//         },
//     ],
// };

const stateSlice = createSlice({
    name: "stateSlice",
    initialState,
    reducers: {
        addBooks: (
            state: stateTypes,
            action: PayloadAction<{ args: stateTypes["books"] }>
        ) => {
            state.books = action.payload.args;
        },
    },
});

export const { addBooks } = stateSlice.actions;
export default stateSlice.reducer;
