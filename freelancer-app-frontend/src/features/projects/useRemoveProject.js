import { useMutation, useQueryClient } from '@tanstack/react-query'; 
import { removeProjectApi } from '../../services/projectService';
import { toast } from 'react-hot-toast';

export default function useRemoveProject() {
    const queryClint = useQueryClient();

    const { mutate: removeProject, isPending: isDeleteing } = useMutation({
        mutationFn: removeProjectApi,
        onSuccess: (data) => {
            toast.success(data.message);
            queryClint.invalidateQueries({
                queryKey: ["owner-projects"]
            });
        },
        onError: (err) => {
            toast.error(err?.response?.data?.message);
        }
    })

    return { removeProject, isDeleteing };
}