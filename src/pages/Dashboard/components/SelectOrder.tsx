import { StringParam, useQueryParam } from "use-query-params";

/* Components */
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function SelectOrder() {
  const [order, setOrder] = useQueryParam("order", StringParam);

  return (
    <Select
      defaultValue="desc"
      value={order ?? "desc"}
      onValueChange={setOrder}
    >
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select order" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Order</SelectLabel>
          <SelectItem value="asc">Ascending</SelectItem>
          <SelectItem value="desc">Descending</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
