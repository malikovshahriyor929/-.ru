import { createContext, useEffect, useReducer, useState } from "react";
import myAxios from "../../hooks/my_axios";

export let adminContext = createContext();

const AdminProwider = ({ children }) => {
  useEffect(() => {
    myAxios.get("/product").then((res) => {
      AdminDispatch({ type: "setData", data: res.data });
    });
  }, []);

  let initialState = {
    adminData: [],
  };

  let reducer = (state, action) => {
    switch (action.type) {
      case "setData":
        return { ...state, adminData: action.data };
      case "add":
        let newdata = {
          ...state,
          adminData: [...state.adminData, action.product],
        };
        // myAxios
        //   .post("/product", action.product)
        //   .then((res) => console.log(res.data));
        return newdata;
      case "delete":
        let deleted = state?.adminData?.filter(
          (value) => value.id !== action.deletedId
        );
        return { ...state, adminData: deleted };
      case "edit":
        let editedData = state.adminData.map((value) =>
          value.id === action.EditedProduct.id
            ? action.EditedProduct
            : value
        );
        return { ...state, adminData: editedData };
    }
  };

  let [adminState, AdminDispatch] = useReducer(reducer, initialState);
  return (
    <adminContext.Provider value={{ adminState, AdminDispatch }}>
      {children}
    </adminContext.Provider>
  );
};

export default AdminProwider;
//{
// "product":
// [
//     {
//       "id": "1",
//       "active": "sale",
//       "article": "XJ89YHGO",
//       "name": "Перфоратор универсальный Wander X645-46 GF 1450W",
//       "oldPrice": 15999,
//       "currentPrice": 12789,
//       "discountPercentage": 15,
//       "imageUrl": "https://s3-alpha-sig.figma.com/img/a5b0/d181/c5c7cca2305acf97ff6ea2842422a5f0?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=paH~0vCMR9avu1YGJ2FvC~lav8GvbdSLP~8QsX~2Rrpg79-9vIRm-1kjYkzP6pO09GYUdMrVTu2tEkc8vtRiDegwmwSNf0CgOFgtB5AAfV8lxa5Gvc2aAi3du0FnJiO0I6DuqcNxgz8Ito7wXbagP0lwUjRsGMaJTc3spmSXyLnGcuFmr04dtNEzsK5Z8pYZH5bkYKKlHlRTnszB5-s4E3rZXu3E59fxxlwelUP-2Edio7RBw3-PdSQFQSfUdpF3fS9SES3m2~5Q0lik~-IiXPMGdUqtJuTSecDUh7heD35FqazJjIR8LARTpCzfuhB5wPBjhzek6OqRHUDq9VFyQQ__",
//       "category": "Перфоратор",
//       "isLiked": false
//     },
//     {
//       "id": "2",
//       "active": "xit",
//       "article": "XJ89YHGO",
//       "name": "Смеситель Faris G-120 для раковины",
//       "oldPrice": 1789,
//       "currentPrice": 1789,
//       "discountPercentage": null,
//       "imageUrl": "https://s3-alpha-sig.figma.com/img/6c1b/3d7a/a473a90bf7c96c0c2c38335983d9d7db?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=jB9nXh1rAug6HsyGB-og82SPpbJhhKRqfkpApxa9ZtGZkf6lzuDb2OjgMzurX8wiibOoDvIwsJqgQeOgcKbxGn4agpPQSFC6i-lGeRShHNLhvW9M7GeZWlAsFyafbLTuJhllFhZnDW7YNLyk6urkqE0fjp4p6tdcXZJ6Eapiz73PdZ7XmV3Gt2z0PFU9H9g1Bvk3XwexP5nY-65PDocmBXlxBP0szd3nAw9Krj-T3EnP-z2STQsWNnuyWuYdl9YhSuXk9SptBiOqJ54XcW9rPLKUvXbl9mFZzniOFiin0FjGH5GY3ftOyWUMT1JvntOz0fCfxY4kxwmYoYAFfeOMrA__",
//       "category": "Смеситель",
//       "isLiked": false
//     },
//     {
//       "id": "4",
//       "article": "XJ89YHGO",
//       "name": "Унитаз подвесной Aragio с двойным сливом",
//       "oldPrice": 15999,
//       "currentPrice": 12789,
//       "discountPercentage": 15,
//       "imageUrl": "https://s3-alpha-sig.figma.com/img/37c1/2b03/b6e09954376355c5f17c9993f7c56537?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=iSprHlOy9Z9ZkWJ5kCOUYi6F-R1VoFfZfXKKrHJmVfOSPQJtNhEk4cpf-bU7S~UN~neMeYFSeqe0tRFjRpgb1EsQaSeprQSWYUP4nf8YE721cp5Vcb4QRdapHCQ69b47f1bc9bXIRIxZEWx16XfbYMg~gzXchl4CbLdn8taeC6YKqQusHw8JLk7GVVYTDwSJew9WQ35bx1gg5m2NWHn1af3c7Ar0-xSGqpP6CbXL-tbraXr5d0z1g~qUmzZc~euOA9JxhwS2DCH-le9u7IoLuY1P4EfBQdwHo6ev9ha3-RNTdTpUOkQAze7Xg6aOzQZ7amYvZS0BBtRU14G5QpoMzg__",
//       "category": "Унитаз",
//       "isLiked": false
//     },
//     {
//       "id": "6",
//       "active": "sale",
//       "article": "XJ89YHGO",
//       "name": "Перфоратор универсальный Wander X645-46 GF 1450W",
//       "oldPrice": 15999,
//       "currentPrice": 12789,
//       "discountPercentage": 15,
//       "imageUrl": " https://s3-alpha-sig.figma.com/img/0d3f/3240/df4b13fd1c6ec872ffa3686c37d1361a?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=pdH4kmbs5XNKnYKYDjXzcl6a7i5toAW1DK0PFLbory4k3kD~luaJE8iLZwuWhDQJzh-oDlTXAW5UbyXUnxfh-HQOAMqlkZm-Lvev5~uXCzq48Ru2D0JYqcSfkXN7iIqoPLoBL4sRZlIiiAVdENcPy9heAjR25CpJsleidR58w9m941ji9XCPZneUUSVDTJqlClYhSPxi2M0EM1BMZ-j2tXk~YQFXe68NkrOsiiF8yMcY8ommcFlVOpQb9GHSmIlcSZRjeXdrcounLj5GLjTZJ5w5SIaZrt7qnqp43xPQ6TOLmFKjWM4gDtkOMdy0qe77e-umA41WFVMG8pSyBEaitQ__",
//       "category": "Перфоратор",
//       "isLiked": false
//     },
//     {
//       "id": "7",
//       "article": "XJ89YHGO",
//       "name": "Смеситель Faris G-120 для раковины",
//       "oldPrice": 1789,
//       "currentPrice": 1789,
//       "discountPercentage": null,
//       "imageUrl": "https://s3-alpha-sig.figma.com/img/6c1b/3d7a/a473a90bf7c96c0c2c38335983d9d7db?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=jB9nXh1rAug6HsyGB-og82SPpbJhhKRqfkpApxa9ZtGZkf6lzuDb2OjgMzurX8wiibOoDvIwsJqgQeOgcKbxGn4agpPQSFC6i-lGeRShHNLhvW9M7GeZWlAsFyafbLTuJhllFhZnDW7YNLyk6urkqE0fjp4p6tdcXZJ6Eapiz73PdZ7XmV3Gt2z0PFU9H9g1Bvk3XwexP5nY-65PDocmBXlxBP0szd3nAw9Krj-T3EnP-z2STQsWNnuyWuYdl9YhSuXk9SptBiOqJ54XcW9rPLKUvXbl9mFZzniOFiin0FjGH5GY3ftOyWUMT1JvntOz0fCfxY4kxwmYoYAFfeOMrA__",
//       "category": "Смеситель",
//       "isLiked": false
//     },
//     {
//       "id": "8",
//       "article": "XJ89YHGO",
//       "active": "sale",
//       "name": "Триммерная леска «Спираль-100»",
//       "oldPrice": 1999,
//       "currentPrice": 1289,
//       "discountPercentage": 15,
//       "imageUrl": "https://s3-alpha-sig.figma.com/img/afd5/390c/99640265f62efa56081e542f5557a1e3?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=iwQA2oD2WJ00jQPXmfeKPzUyEMghmtUpRzpg-CRNvxia3XSjNxzYgRfbqmwyUC1QD0txHpqslSR1zZ~8Ut3gLIN0LON7mPZ8YOFW8XZNVYgZ0Sqa7jN6cffKvNXawio1hxnCP0ux0CUBox6b0Ne6f~0-z7NG8XbC7JMem67obYPT2TMc9BtL4RVnFQN9K4rTn6lAMh4hElnMkCA5-wYfh2hKbo3450Qtf~QN0peQD-Ofd47B~0BE17jqZyJxz3~wTTgqXQAczprapwUhTdcu93joRUts3ts1UnOYgRsAxraKNIV8fVRPPzF8CcyCJ-W5ihy6KfhIDHva93OzK7HTkA__",
//       "category": "Триммерная",
//       "isLiked": false
//     },
//     {
//       "id": "9",
//       "article": "XJ89YHGO",
//       "active": "xit",
//       "name": "Набор гравировальных насадок Nozzle-Tok",
//       "oldPrice": 15999,
//       "currentPrice": 12789,
//       "discountPercentage": 15,
//       "imageUrl": "https://s3-alpha-sig.figma.com/img/d622/d585/c917d2d1ad99365dc2815deb815d2509?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=kzkjBagBCP7-DrAvnXL6q9i-qFWaGc7ZRHxveU-XJ2qUQxZBGcrG7f4NXBgL-Z0LSQsSpJKEY7-gY2RucVAoxRGIYPFSRSGBr~sTPpyZZ~yAaxg5R7U8XTE3etY-l4MVvDCaDSzq2Ysa~wzivUtes7NzLowc83O2nW6JMKSSqoj2fwzoEmgifYqp-UosDxIF-nKH2~WxSlxxllpbMSGNE3Nqp4F61vzb9EIxv2KGA8Md8wOiSLhsd3xDqNcyoJpLWLyWcpvjLbe8du78FPXrpe1em4kl8tofgU0k-TFVKrQO~yMYT7mPZSsis5egTvR55Jc1wRIUN5agod~9sAKztQ__",
//       "category": "Набор",
//       "isLiked": false
//     },
//     {
//       "id": "10",
//       "article": "XJ89YHGO",
//       "active": "new",
//       "name": "Унитаз подвесной Aragio с двойным сливом",
//       "oldPrice": 1999,
//       "currentPrice": 1289,
//       "discountPercentage": 15,
//       "imageUrl": "https://s3-alpha-sig.figma.com/img/b0b9/a2df/2e145002618c35755d0336bb6c84a315?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=j6APUvtccXZBMhCqItlbKMcK5AAa0NuV3AOxFcb6zJ0tykneAfb1qzIeKmdTmV51FUIGsmm3Q8kgZ~BbWoneLzuG5sbHlwMq-6ydXOFdx7Quet7oR-5B6i~zqPvNivZmohYlrsmbqzSHaLtlzBIKNcm2ZdD926Iub8Gfpw~MuXfyuGxZlUEJPMPgbHnUUNLACE5YKnvv6xDDbEJotdxL~O2zc4vtt2oxeEXf60tccrrkvTOnsQTQZTiU2k9fRKhPW9IywgrDWVOT0aU1MsQjyuENXlhH7HOgxXxbOIrTDwsNdqIGk24ZupT7Zwia4l1HeCnNFgOLwt7EQSzWV-zKsw__",
//       "category": "Триммерная",
//       "isLiked": false
//     },
//     {
//       "id": "11",
//       "article": "XJ89YHGO",
//       "active": "new",
//       "name": "Триммерная леска «Спираль-100»",
//       "oldPrice": 15999,
//       "currentPrice": 12789,
//       "discountPercentage": 15,
//       "imageUrl": "https://s3-alpha-sig.figma.com/img/afd5/390c/99640265f62efa56081e542f5557a1e3?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=iwQA2oD2WJ00jQPXmfeKPzUyEMghmtUpRzpg-CRNvxia3XSjNxzYgRfbqmwyUC1QD0txHpqslSR1zZ~8Ut3gLIN0LON7mPZ8YOFW8XZNVYgZ0Sqa7jN6cffKvNXawio1hxnCP0ux0CUBox6b0Ne6f~0-z7NG8XbC7JMem67obYPT2TMc9BtL4RVnFQN9K4rTn6lAMh4hElnMkCA5-wYfh2hKbo3450Qtf~QN0peQD-Ofd47B~0BE17jqZyJxz3~wTTgqXQAczprapwUhTdcu93joRUts3ts1UnOYgRsAxraKNIV8fVRPPzF8CcyCJ-W5ihy6KfhIDHva93OzK7HTkA__",
//       "category": "Триммерная",
//       "isLiked": false
//     },
//     {
//       "id": "12",
//       "article": "XJ89YHGO",
//       "name": "Перфоратор универсальный Wander X645-46 GF 1450W",
//       "oldPrice": 15999,
//       "currentPrice": 12789,
//       "discountPercentage": 15,
//       "imageUrl": "https://s3-alpha-sig.figma.com/img/4282/5fdb/8edd0dfbde4c651fb92e45ac103e981c?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=XsY6YyYhcsxItr-Tb9Vxg-KQt8I0drfN-1bV6s7ttOEoy2c4FY-r5x7bCZMT78nxwnJElXzJo-J0DLZqb3mtUELXMfiAsE0NIPc8fiD-eX7K64RWhCNyilKuFALS5ULcikdfDn9BxZ31WyIO6vBS3T44XsUdvEru02ViWd85-9ZqetfYiIrWcR6P1bu1b8do4X19OWnNYfe1IEOw~3eFdbOLXw3AOrjUey56I1eo8E8VwNExOThgFS2i0L~eF4VwqSBpo9qBCeWnt~FyT4TwkjC5KC5YptH6tbnSA~LYzQAjbbkPQQBpcwsfLnoQy6O-Ag~EF8jWN3A8eBptaTn7mw__",
//       "category": "Перфоратор",
//       "isLiked": false
//     },
//     {
//       "id": "13",
//       "article": "XJ89YHGO",
//       "name": "Набор гравировальных насадок Nozzle-Tok",
//       "oldPrice": 15999,
//       "currentPrice": 12789,
//       "discountPercentage": 15,
//       "imageUrl": "https://s3-alpha-sig.figma.com/img/7b65/7086/f6506bc87ab59807472f69c5d35c1c17?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Gtbovxh24UYFaKzGh3m4SgWTn0b2wzhSacdtCFOtGe1o0dCSlj7pYxx4brzb8SCA~ZxE75iCHz4aiiYiAc6u8Js9Ynw64TQJSvL2eJ71Ph5Z3n6cxPnYC3h5YStNtgFkXywQ7198iouklG9IUqXdF0H8NTHmbCIkHfGJ4PsNyKTl2KbgncJWAYYGIM4U5qv~XLaikxdY1uVQKm5PAmx4nIUbzNPCamqMAf0YtPbfBdQKyHMp7e7SBMzQlpAW2olv2nDVSiBE0M7v~qgM7qOrbg0QCH8wpFyZB3iQeeXfX3K2mrUa-T8LJcrh~tJAinuDOTVJWHvJj-D6lJJdT2C9YA__",
//       "category": "Набор",
//       "isLiked": false
//     },
//     {
//       "id": "14",
//       "article": "XJ89YHGO",
//       "active": "sale",
//       "name": "Смеситель Faris G-120 для раковины",
//       "oldPrice": 1799,
//       "currentPrice": 1489,
//       "discountPercentage": 15,
//       "imageUrl": "https://s3-alpha-sig.figma.com/img/5e2e/84ae/7d8fa62aac606267a8088fb75acca463?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=s9xIl5UBNJjp7gEIoN5tCG-badpv5EfJquv7fqsujgrhuxm9AgQngfW6PSFKJE10HgJraME5LMPw~5WyYr6mp0hEq717MdUWoPHj5FyEu~baLWNTkwjOI17-EAHoEkJRqvbv1Wndj6jATJ3SZx150-caDN0Q5y30V9emQ8kJyVXSU38oQUfKve-7j0Rg-JaVC98XjymXKHf3Z4Jn3ydGRZ8WVshYm1HT178uumiilWYXjIIPBtGDhTAmptp19eYizwP1VgnV1h~hWxKKxEWVTfGtaiaK1TsSMIFoZ3zVCTi1emtWnyGNwghDS8BAtOc1ZKojEsEWuAYT-6heVNhOlQ__",
//       "category": "Триммерная",
//       "isLiked": false
//     },
//     {
//       "id": "15",
//       "article": "XJ89YHGO",
//       "active": "new",
//       "name": "Триммерная леска «Спираль-100»",
//       "oldPrice": 1599,
//       "currentPrice": 1189,
//       "discountPercentage": 15,
//       "imageUrl": "https://s3-alpha-sig.figma.com/img/6223/cf2a/19d8ad025ed662c3200352f5a578108e?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ZTcnTieId79nmpHMekfEEd-mps5SFGhKUgokOQP8BDJBHCVv7e0WZt4WOov7r2aCc-tA-z9ZuswtG~ZTPHBhku0XUsY5A71gZku9pJEhxtUfR9sfr6iWIAdUypegHW3rLsOpR4ccoVFN69Bqa4np~lqLYSAj3J6ARvo8Tk0tfCqSca8pq5UwsrG1I81Inww0NiTsg1nnMND0DqebX1gCw4l9-EAxT2zrng5U3WYcgXDOlIOaHinh9D~2Cyec3zpkZRfDq-qIHHKrV0AsAqm7ubRU0F8izD3F1VG3WmcGTW~FXdS2Y3FJF4OqUg7qkSlO1O6RQWONGbEb7301UZvGgQ__",
//       "category": "Триммерная",
//       "isLiked": false
//     },
//     {
//       "imageUrl": "https://s3-alpha-sig.figma.com/img/9653/3c33/486b578fadfa1c88a0e5a2f4723d1e38?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=mBktL0lvQj-MY~GEPXZNSxnTSpZ6RhXcFYG47e2cAsUOUQJMozLELCfUJC5NzhpbUP~xBEhYG3ie5fpKifNjqbZtbGkQFU-ykNsdOOnS1EkqxhVZvIYkDaV1YgMsS1OBXLusPr2d6dq2BXnSbPJZySZIWh7RrVupfkHEhzCiYqZgYA72-JPxbmhb0Kp8bcCYgoTzdITJAxurvlUr3rB5Dx6XM0U~1SD9rEgLjE5LPp40uyIIHO~m7LgsjHPJJ5gfZFRB-VmNX~w0L0UCkTaE541qSdKFYzbteZbb1LXvaqTwYeijRXgWU6GJLV1v~hHRHkXYVty~hZt23WEvzof8Qw__",
//       "article": "XJBYVHGO",
//       "info": "Триммерная леска «Спираль-100»",
//       "currentPrice": 9499,
//       "discountPercentage": 25,
//       "oldPrice": 12000,
//       "active": "new",
//       "isLiked": false,
//       "name": "Триммерная леска",
//       "id": "16"
//     },
//     {
//       "imageUrl": "https://s3-alpha-sig.figma.com/img/3853/d34c/96176220c2b1b9a82a70c83b5b9ea947?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Q5XDk2Qj10hLON~NQ59QCc7GOo7HHMhi4nnylftpIXTa0V2jhwhURAV~hVBj0qpXygYBj0Tl8POLRYqLSb4cqDMBD3POJ2ysB~gfcD-q0UUXMKiFH0S8fjNXtXRDpaVIvqd2~mdnHsNBLMGCQgaeR5kMuFahFSylVAYJfo9HhfDHkavHc3w2aOstP6aRqRbIs2qYFkXdYWi5NG8nw9daKveGacWNSGfgW1nUv9BEozCB9WYGwkJnLI3DBrXCXUKOZJaJKaipya5meKEDlU-dp-WU7Ioh1qoX1RRdxu4HZPsFHVTUCLN5keKe6nVzAhMb5B8ErawDWHZElI36JZxKkg__",
//       "article": "XJBYVHGO",
//       "info": "Унитаз подвесной Aragio с двойным сливом",
//       "currentPrice": 9499,
//       "discountPercentage": 25,
//       "oldPrice": 12000,
//       "active": "new",
//       "isLiked": false,
//       "name": "Унитаз Aragio",
//       "id": "17"
//     },
//     {
//       "imageUrl": "https://s3-alpha-sig.figma.com/img/271a/2df9/7800d164515eeeb06d394bd7638cce2f?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=bxD2rC5dtGAVXjirVM4FDsCBXcborNm-D8a5uHn~m47LNLpQtEiqNFFvcmvVUfnF4JO3GSrkxZjMQA1Qb2GMUd0B77PaXcwJBGcgbhwSuo5vcApqKBkNdDrxrW75vFMhZnYpYir~kwxNjTTyUoUI17u-FfMpi78wxh5Z-YzaWV1GIk-CGjzDpPjObZXx3Uz4Ww9zWgatgE~mjVX8v3BaQnmFMGXOV~BMbdYp4M1yvBwVhibpMdrsadnAHR0g8X-1cmnqGj8mGa02ZU6r-XxFpraqr~AIAAzyn83xMThYuVFnFl-ULPDmp6UYWH5P3-v2j2MzRpqY8sQ-LTaUOdmdgw__",
//       "article": "XJBYVHGO",
//       "info": "Набор гравировальных насадок Nozzle-Tok",
//       "currentPrice": 9499,
//       "discountPercentage": 25,
//       "oldPrice": 12000,
//       "active": "new",
//       "isLiked": false,
//       "name": "Набор Nozzle-Tok",
//       "id": "18"
//     },
//     {
//       "imageUrl": "https://s3-alpha-sig.figma.com/img/32b0/5164/3149b43ea219c3737f9a58c249cee12d?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=CL27gDybv0gKNENBnxnECq~MJ2HCpkObF1GJWmwy5QQPs5ejdTDBVEvPuZtTUwQHEETtLTUDE~C1qeVEJZl1hL10doGRj469NNZwocVY6YUbemGbDDwuIawivarLbhbjOMRSGtCBMbmwu-c-DoFocdea-AxOrGrMpQMXWKWFbqoABG54tTn-L5afWF2jopHB2JtZfmyp5ovtpUMxtYIGI0Nc1Axjy45gkfQkWXJzvOnVX6kO4sUa0f5jbXfiguFfoPG6OELzRQ7u~MEALXQjXL4eZvZ~FTw67l8ZPY2GKGYOIc6oABhEiSR-zzHthIFfl8DjFSCS924QYWE4aOJq-w__",
//       "article": "XJBYVHGO",
//       "info": "Перфоратор Wander X645-46",
//       "currentPrice": 9499,
//       "discountPercentage": 25,
//       "oldPrice": 12000,
//       "active": "new",
//       "isLiked": false,
//       "name": "Перфоратор Wander X645-46",
//       "id": "19"
//     },
//     {
//       "imageUrl": "https://s3-alpha-sig.figma.com/img/7c0c/fe31/de6bccade5b11f2d8de67643c5d3bb54?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=hR5HOwTa82FIIos2j2D27ZpF~s7Rfrl7fZ5ful5ADE~Vs7ZY6yXOKxug3VZMlk5zztMZqb6eofojc-YYBtFB7YWaTdAm7~DTviIhEmCTtoavfhN66e8p5zkvzV6PNYAn2AHrxArQrbvkjOk2aAap7Tu9nIWtW78Vp7kFm08Abegpacp5RYGOhmK0n94eVKl~C55Bn1W6CvgqcboSCb~nRHUJgHRWPGIQVJCk7b7gyCbrtOuhOv8fFF-JKe7tCHHtiBY8mhSRjIpW-0nxOiE~kanjFTPgncnFijyY6~oTuTeFBPducB~9aZ0TmftxcFJwc22BpdyrUheV1NnceDBPcA__",
//       "article": "XJBYVHGO",
//       "info": "Смеситель Faris G-120 для раковины",
//       "currentPrice": 9499,
//       "discountPercentage": 25,
//       "oldPrice": 12000,
//       "active": "new",
//       "isLiked": false,
//       "name": "Смеситель Faris G-120",
//       "id": "20"
//     },
//     {
//       "imageUrl": "https://s3-alpha-sig.figma.com/img/1cbd/51b2/7e1888237bfb92583a97fa6cd94b3e83?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=nS3aRQ7MR-d0BZw~loV6mtVXAhjJaU1MpUPjJuyJORHMwF5YmVXeqmoemWxXWpOaN-AYmqgBkaqL-DDZMrm7MfOh34SntanV5DiAYCmoV-FTDQ4UhpnxVT70bf~wc-JKxvFPwoolOA5SYTQWgC4dxECWIJ3fCoU9G~~DC1c4~xbulgkR~yR~58d8ckUaIcDkoMaZULygl2MAT6U46wLcuRPzRYnfsoKjw8xRTaPOtbTnKQ4qaoQb633G1zpx6XjNumoAAtYa8mAQnuWG1mTjNbTQefHa2-9swjWrn7fhOmwQoYhW4yhXTsEllohSg0kEFkvPqPy-f4o1Qt3ERYXeTA__",
//       "article": "XJBYVHGO",
//       "info": "Триммерная леска «Спираль-100»",
//       "currentPrice": 9499,
//       "discountPercentage": 25,
//       "oldPrice": 12000,
//       "active": "new",
//       "isLiked": false,
//       "name": "Триммерная леска",
//       "id": "21"
//     },
//     {
//       "imageUrl": "https://s3-alpha-sig.figma.com/img/5c91/ee82/1e73ba5f5afecfc2f9f1cad8f9114c6d?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=eakzt6lJSeG12VXbKEH5oTfHtPzZkLZ89yiSOioJBTIjVbaCcFIWhm15n7p6PEpGctf5GHZvccslf7eqiDfAb7nh5WW4JDGNq1HFk9OjcvxM1N6xXYwNdi68uAMeMhvkmN~bM6UfTjmxnPMa~Ry9GW5d4YhA5iZ0-LEqAP4Jc8m195cdACcO3Rg4zPuuTCo-z64PEGp6w9HF7IjrlyxZfOTbvNxd92J7DIitUUacFBn7FGTYh9xf-W7EQcW-ZewEi0aaLlSo3DCWFSjLRZUbEi2Dn00jP6Pf4qTml1jJ3ji-rc9Zbv237w-u~YqlMWpjRnWnaPML5ApSHl6HvWBaCQ__",
//       "article": "XJBYVHGO",
//       "info": "Унитаз подвесной Aragio с двойным сливом",
//       "currentPrice": 9499,
//       "discountPercentage": 25,
//       "oldPrice": 12000,
//       "active": "new",
//       "isLiked": false,
//       "name": "Унитаз Aragio",
//       "id": "22"
//     },
//     {
//       "imageUrl": "https://s3-alpha-sig.figma.com/img/4652/0840/85569b069f133975f45db817421d8f2a?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Z5SqrKXzUfH8FDhNN4U1LADRg9h99Cv4VqK4VRuNr144jXoT7ikN04bZZYz~E7w9~3x-B~nNyLRoaUeiPSgZz9e3nPBX1c6LpvNgPbtRhdF2QO~HsiIJsvGfdrSKQEiG5uoN0csgpk2iuMx3i87TjgsJlHx4PIr~LtdSAI-tGDhi9OOQITutP8zIEuIqKg24B2apaqOcwUoXhoKmG4BEMdpCLhOzKjQUEWP4h81rkAjZq7H3UkPbQLqV6c-AKwHf7BySxr4m2Sl2kKDrfx0A8lSes5bkCS-AyBdwe4QeWdF0CJ3TpoNNsDvwjLad7BTnEVcyB1LIytxcO7kMY-qZ6g__",
//       "article": "XJBYVHGO",
//       "info": "Набор гравировальных насадок Nozzle-Tok",
//       "currentPrice": 9499,
//       "discountPercentage": 25,
//       "oldPrice": 12000,
//       "active": "new",
//       "isLiked": false,
//       "name": "Набор Nozzle-Tok",
//       "id": "23"
//     },
//     {
//       "imageUrl": "https://s3-alpha-sig.figma.com/img/7050/815d/f470762185103442f5e5288f787ad6f5?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=uPBAVzkjFdh1c3hz2gB4SaGmodfTc3FYXsiNpwDHoqmwxsSAnJsQ8Nsm5vJF0mUdMnoTw8jGyISuAJEedIHVlyX~Xjm6damwzGERL5a3O~xo~CwOI~1~ZKN5iAJq1nWgzpi214SG30METUi4Qw~tRCWgEGa0bn8wBGjqFV6luXmKCVPP5SzjfVqUjf8JveQKmYL2tCK5ycbuZtm01fmFIaeKy2TBGfOhsSj2h8yp-Wf-qaW1wj~C3Skb6y1X38i20QqQA8t1EaNipFj7wLP2obnmzoqUZAoRtlWdubWJ~O4w8Hp5dtu6OX33zGylvwa-gExrpsEhYiQRiKucB1d68g__",
//       "article": "XJBYVHGO",
//       "info": "Перфоратор Wander X645-46",
//       "currentPrice": 9499,
//       "discountPercentage": 25,
//       "oldPrice": 12000,
//       "active": "new",
//       "isLiked": false,
//       "name": "Перфоратор Wander X645-46",
//       "id": "24"
//     },
//     {
//       "imageUrl": "https://s3-alpha-sig.figma.com/img/6eb8/1fda/e06b97cc2a0c0eeb400c0754883c0b22?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=JRbIn1Z7ePuOH4wBBv2ubUYphsy8dD~JuKpN1pzcck6Vbl0UKmdHK9LTlznyP9myJWr6Fkirh9SMqaCjw~3ZNUNTtgsKIwyGa4s~CSkCL1j7wPWyiCgHzOLfKcnGs0qZ-lmlWTx5qD8VS8ztFwkqBxqI860TRN641ABL5R4TxfI46HZRx50vRYiKfwSP~1eg1EnHG-QvJGtip8LKxmENClFYLv92QlLUTKXRB3GHIoAqPpwnMzjOc3-I3lPo1p625zrC~U-I2TFtGyt4XzqJSjsDz3frcF8ttLfGvmI6t~VhyEvHPave2AWP3J4xgoHAHDlOrv2Xy~UQdqkYi9AGWw__",
//       "article": "XJBYVHGO",
//       "info": "Смеситель Faris G-120 для раковины",
//       "currentPrice": 9499,
//       "discountPercentage": 25,
//       "oldPrice": 12000,
//       "active": "new",
//       "isLiked": false,
//       "name": "Смеситель Faris G-120",
//       "id": "25"
//     },
//     {
//       "imageUrl": "https://s3-alpha-sig.figma.com/img/ffc1/0c36/bdb34c604c57edae09708bfbdaaa8045?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=AIu-x9FOEyqwbaxVrOgp9dUsO1wvlC~U-U-SWmkbjGTL96m1A18RefzWxs6jIDoP8vSg27yq1wzltt1gK~YTg4vHMMVNMzATYm9CqJ13S1CsXJGvwZJYh43ekkwMp1pjvqzHUN0A7yEW2Uu2l7AkBQzdgaj4edMSoIhjivRFFAJcokyOMvj0KiwsmzmgfvkI3JxqVt-QkzQcKeVX0THQrtQ1l-5VK5cBBoc67pCc0OXhzVWlpousZI8jcqN05F-splHi9SdTFJhf1tHfJpNPR-LBeNw3~Zico9oBn1JOcXzSao9wVP89jpy3ttteFz6ZAT9gIR3TRZEmnExDcxFvNw__",
//       "article": "XJBYVHGO",
//       "info": "Триммерная леска «Спираль-100»",
//       "currentPrice": 9499,
//       "discountPercentage": 25,
//       "oldPrice": 12000,
//       "active": "new",
//       "isLiked": false,
//       "name": "Триммерная леска",
//       "id": "26"
//     },
//     {
//       "imageUrl": "https://s3-alpha-sig.figma.com/img/9ee5/516b/8aec7d6ee4abb0638b9aad2242808d56?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=srwATro86-TetvhqCBM--IWJtWF18-gC5HIlzfyUr5GGhc5vt8meaqXg1C854nrNwkimoT~QRuOkrUmyOizepIN7Vh2jwZ8RmuABosJJY7jIo~RqBoGuKhJ9lwborN702Ooqx6mvF9kaH~dOZq2IXg2W2ablRnLSv~JC~mcemilhv6WcLUhM-p6QphY48zByLYmYMc2NaZh5apyat5BZTdMdmnkRuAUnSw45921LTNDyCnvQ6lQffhOlRp3lZN5LAoCW0~BA3tql54~c1nkZs7uVH7Lbt29jIMqdWDC~LOEIjzyxaM5XYb2UTFwJAXONWf-R4Vy4Ex7OT3VhqWyczQ__",
//       "article": "XJBYVHGO",
//       "info": "Унитаз подвесной Aragio с двойным сливом",
//       "currentPrice": 9499,
//       "discountPercentage": 25,
//       "oldPrice": 12000,
//       "active": "new",
//       "isLiked": false,
//       "name": "Унитаз Aragio",
//       "id": "27"
//     },
//     {
//       "imageUrl": "https://s3-alpha-sig.figma.com/img/3853/d34c/96176220c2b1b9a82a70c83b5b9ea947?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Q5XDk2Qj10hLON~NQ59QCc7GOo7HHMhi4nnylftpIXTa0V2jhwhURAV~hVBj0qpXygYBj0Tl8POLRYqLSb4cqDMBD3POJ2ysB~gfcD-q0UUXMKiFH0S8fjNXtXRDpaVIvqd2~mdnHsNBLMGCQgaeR5kMuFahFSylVAYJfo9HhfDHkavHc3w2aOstP6aRqRbIs2qYFkXdYWi5NG8nw9daKveGacWNSGfgW1nUv9BEozCB9WYGwkJnLI3DBrXCXUKOZJaJKaipya5meKEDlU-dp-WU7Ioh1qoX1RRdxu4HZPsFHVTUCLN5keKe6nVzAhMb5B8ErawDWHZElI36JZxKkg__",
//       "article": "XJBYVHGO",
//       "info": "Набор гравировальных насадок Nozzle-Tok",
//       "currentPrice": 9499,
//       "discountPercentage": 25,
//       "oldPrice": 12000,
//       "active": "new",
//       "isLiked": false,
//       "name": "Набор Nozzle-Tok",
//       "id": "28"
//     },
//     {
//       "imageUrl": "https://s3-alpha-sig.figma.com/img/d246/5737/6746b9693b507546470fc249d251552e?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=CanmBjvBoV7OrPCLUeIofidgI8egZrgLWEZpsJzcNz-8O2ArnVcBTKn6wpWzrr~BkdcuBr4hihK4QNUhXLp4RhauIOnVNqayJxwiRu8q4BGNI8Xfug0VEcRU2GociSoRmtbF6G3x3Ce2~ABQljzagHLVVMANiGUuHH2aq~gB9h5SKpkYhLfixLxfcku8oJlIkgIu4uaPF3WaWUu~nOBESZae2gJhvA9gyq00MiL3UBHywumTmiwvFgeZSUktBlyXYLEulRs8cw3gltZA25R1c4LJU7Bb3YYH12ztcyYfRVV3pGVQN1OhSrIw~PmCy82imPwW6qch9afQnmvDRnDpWw__",
//       "article": "XJBYVHGO",
//       "info": "Электрическая дрель Bosch 600W",
//       "currentPrice": 9499,
//       "discountPercentage": 25,
//       "oldPrice": 12000,
//       "active": "new",
//       "isLiked": false,
//       "name": "Дрель Bosch 600W",
//       "id": "29"
//     },
//     {
//       "imageUrl": "https://s3-alpha-sig.figma.com/img/6eb8/1fda/e06b97cc2a0c0eeb400c0754883c0b22?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=JRbIn1Z7ePuOH4wBBv2ubUYphsy8dD~JuKpN1pzcck6Vbl0UKmdHK9LTlznyP9myJWr6Fkirh9SMqaCjw~3ZNUNTtgsKIwyGa4s~CSkCL1j7wPWyiCgHzOLfKcnGs0qZ-lmlWTx5qD8VS8ztFwkqBxqI860TRN641ABL5R4TxfI46HZRx50vRYiKfwSP~1eg1EnHG-QvJGtip8LKxmENClFYLv92QlLUTKXRB3GHIoAqPpwnMzjOc3-I3lPo1p625zrC~U-I2TFtGyt4XzqJSjsDz3frcF8ttLfGvmI6t~VhyEvHPave2AWP3J4xgoHAHDlOrv2Xy~UQdqkYi9AGWw__",
//       "article": "XJBYVHGO",
//       "info": "Шлифовальная машина Makita 720W",
//       "currentPrice": 9499,
//       "discountPercentage": 25,
//       "oldPrice": 12000,
//       "active": "new",
//       "isLiked": false,
//       "name": "Шлифмашина Makita 720W",
//       "id": "30"
//     },
//     {
//       "id": 1740055920155,
//       "name": "gazel",
//       "currentPrice": 12000,
//       "oldPrice": 1000,
//       "discountPercentage": 50,
//       "active": "sale",
//       "imageUrl": "https://s3-alpha-sig.figma.com/img/6eb8/1fda/e06b97cc2a0c0eeb400c0754883c0b22?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=JRbIn1Z7ePuOH4wBBv2ubUYphsy8dD~JuKpN1pzcck6Vbl0UKmdHK9LTlznyP9myJWr6Fkirh9SMqaCjw~3ZNUNTtgsKIwyGa4s~CSkCL1j7wPWyiCgHzOLfKcnGs0qZ-lmlWTx5qD8VS8ztFwkqBxqI860TRN641ABL5R4TxfI46HZRx50vRYiKfwSP~1eg1EnHG-QvJGtip8LKxmENClFYLv92QlLUTKXRB3GHIoAqPpwnMzjOc3-I3lPo1p625zrC~U-I2TFtGyt4XzqJSjsDz3frcF8ttLfGvmI6t~VhyEvHPave2AWP3J4xgoHAHDlOrv2Xy~UQdqkYi9AGWw__"
//     },
//     {
//       "id": "1740056309827",
//       "name": "assdsdsdasdsds",
//       "currentPrice": 1234234,
//       "oldPrice": 1324123,
//       "discountPercentage": 123,
//       "active": "sale",
//       "imageUrl": "https://s3-alpha-sig.figma.com/img/6eb8/1fda/e06b97cc2a0c0eeb400c0754883c0b22?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=JRbIn1Z7ePuOH4wBBv2ubUYphsy8dD~JuKpN1pzcck6Vbl0UKmdHK9LTlznyP9myJWr6Fkirh9SMqaCjw~3ZNUNTtgsKIwyGa4s~CSkCL1j7wPWyiCgHzOLfKcnGs0qZ-lmlWTx5qD8VS8ztFwkqBxqI860TRN641ABL5R4TxfI46HZRx50vRYiKfwSP~1eg1EnHG-QvJGtip8LKxmENClFYLv92QlLUTKXRB3GHIoAqPpwnMzjOc3-I3lPo1p625zrC~U-I2TFtGyt4XzqJSjsDz3frcF8ttLfGvmI6t~VhyEvHPave2AWP3J4xgoHAHDlOrv2Xy~UQdqkYi9AGWw__",
//       "article": "XJBYVHGO"
//     },
//     {
//       "id": "1740056426565",
//       "name": "dfedffxzsgd",
//       "currentPrice": 123,
//       "oldPrice": 24534534,
//       "discountPercentage": 2,
//       "active": "sale",
//       "imageUrl": "https://s3-alpha-sig.figma.com/img/6eb8/1fda/e06b97cc2a0c0eeb400c0754883c0b22?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=JRbIn1Z7ePuOH4wBBv2ubUYphsy8dD~JuKpN1pzcck6Vbl0UKmdHK9LTlznyP9myJWr6Fkirh9SMqaCjw~3ZNUNTtgsKIwyGa4s~CSkCL1j7wPWyiCgHzOLfKcnGs0qZ-lmlWTx5qD8VS8ztFwkqBxqI860TRN641ABL5R4TxfI46HZRx50vRYiKfwSP~1eg1EnHG-QvJGtip8LKxmENClFYLv92QlLUTKXRB3GHIoAqPpwnMzjOc3-I3lPo1p625zrC~U-I2TFtGyt4XzqJSjsDz3frcF8ttLfGvmI6t~VhyEvHPave2AWP3J4xgoHAHDlOrv2Xy~UQdqkYi9AGWw__",
//       "article": "XJBYVHGO"
//     },
//     {
//       "id": "1740056689728",
//       "name": "hhhhhhhhshd",
//       "currentPrice": 1234,
//       "oldPrice": 123123,
//       "discountPercentage": 12,
//       "active": "sale",
//       "imageUrl": "https://s3-alpha-sig.figma.com/img/6eb8/1fda/e06b97cc2a0c0eeb400c0754883c0b22?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=JRbIn1Z7ePuOH4wBBv2ubUYphsy8dD~JuKpN1pzcck6Vbl0UKmdHK9LTlznyP9myJWr6Fkirh9SMqaCjw~3ZNUNTtgsKIwyGa4s~CSkCL1j7wPWyiCgHzOLfKcnGs0qZ-lmlWTx5qD8VS8ztFwkqBxqI860TRN641ABL5R4TxfI46HZRx50vRYiKfwSP~1eg1EnHG-QvJGtip8LKxmENClFYLv92QlLUTKXRB3GHIoAqPpwnMzjOc3-I3lPo1p625zrC~U-I2TFtGyt4XzqJSjsDz3frcF8ttLfGvmI6t~VhyEvHPave2AWP3J4xgoHAHDlOrv2Xy~UQdqkYi9AGWw__",
//       "article": "XJBYVHGO"
//     },
//     {
//       "id": "1740056860753",
//       "name": "Lord Boy",
//       "currentPrice": 1234,
//       "oldPrice": 1324,
//       "discountPercentage": 234,
//       "active": "sale",
//       "imageUrl": "https://s3-alpha-sig.figma.com/img/6eb8/1fda/e06b97cc2a0c0eeb400c0754883c0b22?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=JRbIn1Z7ePuOH4wBBv2ubUYphsy8dD~JuKpN1pzcck6Vbl0UKmdHK9LTlznyP9myJWr6Fkirh9SMqaCjw~3ZNUNTtgsKIwyGa4s~CSkCL1j7wPWyiCgHzOLfKcnGs0qZ-lmlWTx5qD8VS8ztFwkqBxqI860TRN641ABL5R4TxfI46HZRx50vRYiKfwSP~1eg1EnHG-QvJGtip8LKxmENClFYLv92QlLUTKXRB3GHIoAqPpwnMzjOc3-I3lPo1p625zrC~U-I2TFtGyt4XzqJSjsDz3frcF8ttLfGvmI6t~VhyEvHPave2AWP3J4xgoHAHDlOrv2Xy~UQdqkYi9AGWw__",
//       "article": "XJBYVHGO"
//     },
//     {
//       "id": "1740056923558",
//       "name": "Lord Boy",
//       "currentPrice": 1234234,
//       "oldPrice": 1234,
//       "discountPercentage": 123,
//       "active": "sale",
//       "imageUrl": "https://s3-alpha-sig.figma.com/img/6eb8/1fda/e06b97cc2a0c0eeb400c0754883c0b22?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=JRbIn1Z7ePuOH4wBBv2ubUYphsy8dD~JuKpN1pzcck6Vbl0UKmdHK9LTlznyP9myJWr6Fkirh9SMqaCjw~3ZNUNTtgsKIwyGa4s~CSkCL1j7wPWyiCgHzOLfKcnGs0qZ-lmlWTx5qD8VS8ztFwkqBxqI860TRN641ABL5R4TxfI46HZRx50vRYiKfwSP~1eg1EnHG-QvJGtip8LKxmENClFYLv92QlLUTKXRB3GHIoAqPpwnMzjOc3-I3lPo1p625zrC~U-I2TFtGyt4XzqJSjsDz3frcF8ttLfGvmI6t~VhyEvHPave2AWP3J4xgoHAHDlOrv2Xy~UQdqkYi9AGWw__",
//       "article": "XJBYVHGO"
//     }
//   ]
// }
