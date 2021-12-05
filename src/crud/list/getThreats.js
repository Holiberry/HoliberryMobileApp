import axios from "axios";
import useQuery2 from "../../hooks/useQuery2";
import {getAPIAddress} from "../../helpers/networkService";

const getThreats = () => {

    return axios({
        method: "GET",
        url: getAPIAddress(`public/threats/user-threats`),
    }).then(({data}) => {
        return data
    });
}

export const useGetThreats = () =>
    useQuery2({
        queryKey: ["threats"],
        queryFn: getThreats,
        isArray: true
    });