import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { CreateProposalApi } from "../../services/proposalService";


export default function useCreateProposal() {
    const queryClient = useQueryClient();
    const { mutate: createProposal, isPending: isCreating } = useMutation({
        mutationFn: CreateProposalApi,
        onSuccess: (data) => {
            toast.success(data.message);
            queryClient.invalidateQueries({
                queryKey: ["proposals"]
            });
        },
        onError: (err) => {
            toast.error(err?.response?.data?.message);
        }
    })


    return { isCreating, createProposal }
}