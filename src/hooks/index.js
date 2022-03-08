import { useLocation, useParams, useNavigate } from 'react-router-dom';

export function withRouter(Target) {
  // eslint-disable-next-line func-names
  return function (props) {
    const location = useLocation();
    const params = useParams();
    const navigate = useNavigate();
    return <Target location={location} params={params} navigate={navigate} />;
  };
}
