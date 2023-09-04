import { container } from "./style.module.scss";
import { getAttractionInfo } from "@/services/get-attraction-info";
import { useQuery } from "@tanstack/react-query";

import NotFound from "@/pages/NotFound";
import AttractionCard from "@/components/AttractionCard";
import { useParams } from "react-router";

export default function AttractionInfo() {
  const params = useParams();
  const {
    data: information,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["information"],
    queryFn: async () => {
      const data = await getAttractionInfo(params.id);
      return data;
    },
  });

  return (
    <section className={container}>
      {!information?.error && (
        <AttractionCard information={information} id={params.id} />
      )}
      {information?.error && <NotFound />}
      {isLoading && "Loading..."}
      {isError && "An error occured. Try again."}
    </section>
  );
}
