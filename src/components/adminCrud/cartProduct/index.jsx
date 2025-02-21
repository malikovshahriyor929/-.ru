import React, { useContext, useEffect, useState } from "react";
import { adminContext } from "../../../context/adminContext";
import { Edit, Flag } from "@mui/icons-material";
import myAxios from "../../../hooks/my_axios";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

// schema
const productSchema = z.object({
  // imageUrl: z.string().url(),
  article: z.string(),
  name: z.string(),
  oldPrice: z.string().transform((val) => Number(val)),
  currentPrice: z.string().transform((val) => Number(val)),
  discountPercentage: z.string().transform((val) => Number(val)),
  active: z.string(),
});

const CartProduct2 = (props) => {
  let [editcheck, setEditCheck] = useState(false);
  const [imagePreview, setImagePreview] = useState(props.imageUrl || null);
  const [imageBase64, setImageBase64] = useState(null);
  let {
    id,
    active,
    name,
    article,
    currentPrice,
    discountPercentage,
    imageUrl,
    oldPrice,
  } = props;

  let { adminState, AdminDispatch } = useContext(adminContext);
  let deletedata = () => toast.success("product deleted");
  let deleteErrordata = () => toast.error("product not deleted");
  const handleDelete = async (id) => {
    try {
      await myAxios.delete(`/product/${id}`);
      AdminDispatch({ type: "delete", deletedId: id });
      deletedata();
    } catch (error) {
      deleteErrordata();
    }
  };
  let {
    reset,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ resolver: zodResolver(productSchema), defaultValues: props });

  let success = () => toast.success("seccessfully edited");
  const handleEdit = (data) => {
    try {
      myAxios.put(`/product/${id}`, {
        ...data,
        imageUrl: imageBase64 || imagePreview,
        id,
      });
      AdminDispatch({
        type: "edit",
        EditedProduct: {
          ...data,
          imageUrl: imageBase64 || imagePreview,
          id,
        },
      });
    } catch (error) {}
    success();
    reset(props);

    setEditCheck(false);
  };
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
        setImageBase64(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(handleEdit)}
        className="grid grid-cols-[2.5fr_1fr_1fr_1fr_1fr] max-[600px]:grid-cols-3 max-[390px]:grid-cols-3 max-[322px]:grid-cols-1 max-[689px]:grid-cols-[2fr_1fr_1fr_1fr_1fr] gap-4 items-center p-2 bg-gray-50 rounded-lg"
      >
        <div className="flex items-center gap-4 max-[600px]:col-span-3 max-[390px]:col-span-2">
          {/* <img src={imageUrl} alt="Product" className="w-16 h-16 rounded-lg" /> */}
          <label
            htmlFor={`file-upload-${id}`}
            className="cursor-pointer relative"
          >
            <img
              src={imagePreview}
              alt="Product"
              className="w-16 h-16 rounded-lg"
            />
            {editcheck && (
              <input
                id={`file-upload-${id}`}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleImageChange}
              />
            )}

            {editcheck && (
              <div className="absolute bottom-0 -right-2">
                <Edit />
              </div>
            )} 
          </label>
          <div className="flex flex-col gap-1">
            {editcheck ? (
              <input
                {...register("name")}
                type="text"
                className="border rounded-lg h-7 border-gray-400 w-[350px]"
              />
            ) : (
              <p className="font-medium max-[817px]:line-clamp-2 ">{name}</p>
            )}
            {editcheck ? (
              <input
                {...register("article")}
                type="text"
                className="border rounded-lg w-20 h-7 border-gray-400"
              />
            ) : (
              <p className="text-sm text-gray-400">{article}</p>
            )}
          </div>
        </div>
        <div className="flex flex-col gap-1">
          {editcheck ? (
            <input
              {...register("currentPrice")}
              type="number"
              className="border rounded-lg h-7 border-gray-400"
            />
          ) : (
            <p className="text-blue-600 font-semibold">
              {currentPrice?.toLocaleString("us-US")?.replace(",", " ")} ₽
            </p>
          )}
          {editcheck ? (
            <input
              {...register("oldPrice")}
              type="number"
              className="border rounded-lg h-7 border-gray-400"
            />
          ) : (
            <p className="text-blue-600 font-semibold">
              {oldPrice?.toLocaleString("us-US")?.replace(",", " ")} ₽
            </p>
          )}
        </div>
        {editcheck ? (
          <input
            {...register("active")}
            type="text"
            className="border rounded-lg h-7 border-gray-400"
            placeholder="defualt value sale hit new"
          />
        ) : active ? (
          <p>{active}</p>
        ) : (
          <p>normal</p>
        )}
        {editcheck ? (
          <input
            {...register("discountPercentage")}
            type="number"
            className="border rounded-lg h-7 border-gray-400"
          />
        ) : discountPercentage ? (
          <p>{discountPercentage} %</p>
        ) : (
          <p>0 %</p>
        )}
        <div className="flex items-center max-[390px]:gap-3 max-[390px]:col-span-2 justify-between">
          {editcheck ? (
            <button type="submit">SAVE</button>
          ) : (
            <span
              className="cursor-pointer "
              onClick={() => setEditCheck(true)}
            >
              <Edit />
            </span>
          )}
          <button
            onClick={() => handleDelete(id)}
            className="text-gray-400 hover:text-red-500 px-4"
          >
            🗑️
          </button>
        </div>
      </form>
    </>
  );
};

export default CartProduct2;
