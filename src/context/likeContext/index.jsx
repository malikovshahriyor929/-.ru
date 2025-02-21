import { createContext, useEffect, useReducer, useState } from "react";
import myAxios from "../../hooks/my_axios";

let LikeContext = createContext();

let LikeProvider = ({ children }) => {
  //   let [Liked, setLiked] = useState({ bool: false, id: null });
  //   console.log();
  //   console.log(Liked);

  //   useEffect(() => {
  //     myAxios
  //       .get(`/product/${Liked?.id}`)
  //       .then((res) =>
  //         !Liked.bool
  //           ? myAxios
  //               .put(`/product/${Liked?.id}`, { ...res.data, isLiked: false })
  //               .then((res) => console.log(res.data))
  //           : myAxios
  //               .put(`/product/${Liked?.id}`, { ...res.data, isLiked: true })
  //               .then((res) => console.log(res.data))
  //       );
  //   }, [Liked]);

  let initialState = JSON.parse(localStorage.getItem("like")) || [];

  let reducer = (state, action) => {
    switch (action.type) {
      //   case "liked":
      //     // Check if the item is already in the like list
      //     if (state.like.find((item) => item.id === action.like.id)) {
      //       return state; // No need to update if it's already liked
      //     }

      //     let updatedLikes = [...state.like, action.like];
      //     localStorage.setItem("like", JSON.stringify(updatedLikes));
      //     return { ...state, like: updatedLikes };

      case "liked":
        const  newdata = [...state, { ...action.like }];
        localStorage.setItem("like", JSON.stringify(newdata));
        return newdata;
      // if (state?.like?.find((value) => value.id == action.like.id)) {
      //   let newdata = state.cart.map((value) =>
      //     value.id === action.like.id ? { ...value, isLiked: false } : value
      //   );
      //   localStorage.setItem("like", JSON.stringify(newdata));
      //   return { ...state, like: newdata };
      // }
      // let newdata = {
      //   ...state,
      //   cart: [...state.like, { ...action.like, isLiked: true }],
      // };
      // localStorage.setItem("like", JSON.stringify(newdata.like));
      // return newdata;
      case "delete":
        let deleted = state?.filter(
          (value) => value.id !== action.deletedId
        );
         localStorage.setItem("like", JSON.stringify(deleted));
        return deleted;
    }
  };

  const [Liked, LikedDispatch] = useReducer(reducer, initialState);
  return (
    <LikeContext.Provider value={{ Liked, LikedDispatch }}>
      {children}
    </LikeContext.Provider>
  );
};

export { LikeContext, LikeProvider };
