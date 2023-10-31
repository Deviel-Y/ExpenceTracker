import categories from "./Categories";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

interface Props {
  onSubmit: (data: ExpenceFormData) => void;
}

const schema = z.object({
  description: z
    .string()
    .min(3, { message: "Description must be at least 3 characters" })
    .max(30, { message: "Description must be less than 30 characters" }),
  amount: z
    .number({ invalid_type_error: "Amount is required" })
    .min(0.01, { message: "Amount must be more or equal to 0.01" })
    .max(100_000, { message: "Amount must be less or equal to 100,000" }),
  category: z.enum(categories, {
    errorMap: () => ({ message: "Category is required" }),
  }),
});

type ExpenceFormData = z.infer<typeof schema>;

function ExpenceForm({ onSubmit }: Props) {
  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm<ExpenceFormData>({ resolver: zodResolver(schema) });

  return (
    <form
      className="mb-5"
      onSubmit={handleSubmit((data) => {
        {
          onSubmit(data);
          reset();
        }
      })}
    >
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <input
          {...register("description")}
          id="description"
          type="text"
          className="form-control"
        />
        {errors.description && (
          <p className="text-danger">{errors.description.message}</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="amount" className="form-label">
          Amount
        </label>
        <input
          {...register("amount", { valueAsNumber: true })}
          id="amount"
          type="number"
          className="form-control"
        />
        {errors.amount && (
          <p className="text-danger">{errors.amount.message}</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="categoryFilter" className="form-label">
          Category Filter
        </label>
        <select
          {...register("category")}
          id="categoryFilter"
          className="form-select"
        >
          <option value=""></option>
          {categories.map((category) => (
            <option value={category} key={category}>
              {category}
            </option>
          ))}
        </select>
        {errors.category && (
          <p className="text-danger">{errors.category.message}</p>
        )}
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}

export default ExpenceForm;
