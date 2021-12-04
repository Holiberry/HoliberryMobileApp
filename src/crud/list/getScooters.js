import axios from "axios";
import useQuery2 from "../../hooks/useQuery2";
import { getAPIAddress } from "../../helpers/networkService";

const getScooters = () =>{

    return axios({
        method: "GET",
        url: getAPIAddress(`public/data/scooters`),
    }).then(({data}) => {
        return data
    });
}

export const useGetScooters = () =>
    useQuery2({
        queryKey: ["scooters"],
        queryFn: getScooters,
        isArray: true
    });