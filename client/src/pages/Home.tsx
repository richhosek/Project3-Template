import { useQuery } from '@apollo/client';

import { QUERY_PROFILES } from '../utils/queries';

const Home = () => {
  const { loading, data } = useQuery(QUERY_PROFILES);
  const profiles = data?.profiles || [];

  return (
    <main>
      <div className="flex-row justify-center">
        <div className="col-12 col-md-10 my-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <h3>There are {profiles.length} users.</h3>
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;
