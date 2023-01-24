const updateObjParInArray = (
  arr: Array<object>,
  toCompareName: string,
  toCompare: any,
  newPar: any
) => {
  return (
    arr &&
    arr.map((el: any) =>
      el[toCompareName] === toCompare
        ? { ...el, ...newPar }
        : el
    )
  )
}

//   ...state.users.map((user) =>
//     user.id === action.payload.id
//       ? { ...user, followed: false }
//       : user
//   ),

export default updateObjParInArray
