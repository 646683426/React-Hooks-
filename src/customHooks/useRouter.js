import { useMemo } from "react";
import { useNavigate, useLocation, useParams, useRouteMatch } from "react-router-dom";

export default function useRouter() {
  const navigate = useNavigate();
  const location = useLocation();
  const params = useParams();
  const match = useRouteMatch();
  return useMemo(() => {
    return {
      navigate,
      location,
      params,
      match,
    }
  }, [navigate, location, params, match])
}