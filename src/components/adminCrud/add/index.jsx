import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import myAxios from "../../../hooks/my_axios";
import { adminContext } from "../../../context/adminContext";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Drawer } from "@mui/material";
import CustomInput from "../../../hooks/costomInput";
import { toast } from "react-toastify";

const productSchema = z.object({
  name: z.string(),
  currentPrice: z.string().transform((val) => Number(val)),
  oldPrice: z.string().transform((val) => Number(val)),
  discountPercentage: z
    .string()
    .min(0)
    .max(100)
    .transform((val) => Number(val)),
  active: z.string(),
});

const AddToProduct = () => {
  const [open, setOpen] = useState(false);

  let { adminState, AdminDispatch } = useContext(adminContext);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  let {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(productSchema) });

  let success = () => toast.success("successfully added");
  let submit = (inputValue) => {
    myAxios
      .post("/product", {
        ...inputValue,
        imageUrl:
          "https://s3-alpha-sig.figma.com/img/6eb8/1fda/e06b97cc2a0c0eeb400c0754883c0b22?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=JRbIn1Z7ePuOH4wBBv2ubUYphsy8dD~JuKpN1pzcck6Vbl0UKmdHK9LTlznyP9myJWr6Fkirh9SMqaCjw~3ZNUNTtgsKIwyGa4s~CSkCL1j7wPWyiCgHzOLfKcnGs0qZ-lmlWTx5qD8VS8ztFwkqBxqI860TRN641ABL5R4TxfI46HZRx50vRYiKfwSP~1eg1EnHG-QvJGtip8LKxmENClFYLv92QlLUTKXRB3GHIoAqPpwnMzjOc3-I3lPo1p625zrC~U-I2TFtGyt4XzqJSjsDz3frcF8ttLfGvmI6t~VhyEvHPave2AWP3J4xgoHAHDlOrv2Xy~UQdqkYi9AGWw__",
        id: Date.now().toString(),
        article: "XJBYVHGO",
      })
      .then((res) => {
        success(), setOpen(false);
      });
    AdminDispatch({
      type: "add",
      product: {
        ...inputValue,
        imageUrl:
          "https://s3-alpha-sig.figma.com/img/6eb8/1fda/e06b97cc2a0c0eeb400c0754883c0b22?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=JRbIn1Z7ePuOH4wBBv2ubUYphsy8dD~JuKpN1pzcck6Vbl0UKmdHK9LTlznyP9myJWr6Fkirh9SMqaCjw~3ZNUNTtgsKIwyGa4s~CSkCL1j7wPWyiCgHzOLfKcnGs0qZ-lmlWTx5qD8VS8ztFwkqBxqI860TRN641ABL5R4TxfI46HZRx50vRYiKfwSP~1eg1EnHG-QvJGtip8LKxmENClFYLv92QlLUTKXRB3GHIoAqPpwnMzjOc3-I3lPo1p625zrC~U-I2TFtGyt4XzqJSjsDz3frcF8ttLfGvmI6t~VhyEvHPave2AWP3J4xgoHAHDlOrv2Xy~UQdqkYi9AGWw__",
        id: Date.now().toString(),
        article: "XJBYVHGO",
      },
    });

    reset();
  };
  return (
    <div>
      <Button variant="contained" onClick={toggleDrawer(true)}>
        Add
      </Button>
      <Drawer
        sx={{ width: 300 }}
        className="!w-[300px]"
        open={open}
        onClose={toggleDrawer(false)}
      >
        {
          <div className="flex flex-col gap-5 p-7">
            <p className="text-[18px] ">Add to product</p>
            <form
              onSubmit={handleSubmit(submit)}
              className="grid grid-cols-2 gap-5 items-end w-full  "
            >
              <CustomInput
                register={register}
                name={"name"}
                type="text"
                label={"name"}
                placeholder={"name"}
                error={`${errors?.name?.message}`}
              />
              <CustomInput
                register={register}
                name={"currentPrice"}
                type="text"
                label={"price"}
                placeholder={"price"}
                error={`${errors?.currentPrice?.message}`}
              />
              <CustomInput
                register={register}
                name={"oldPrice"}
                type="text"
                label={"old_price"}
                placeholder={"old_price"}
                error={`${errors?.oldPrice?.message}`}
              />
              <CustomInput
                register={register}
                name={"discountPercentage"}
                type="text"
                label={"discount"}
                placeholder={"discount"}
                error={`${errors?.discountPercentage?.message}`}
              />
              <CustomInput
                register={register}
                name={"active"}
                type="text"
                label={"active"}
                placeholder={"active"}
                error={`${errors?.active?.message}`}
              />
              <Button type="submit" className="h-[42px] " variant="contained">
                send
              </Button>
            </form>
          </div>
        }
      </Drawer>
    </div>
  );
};

export default AddToProduct;
