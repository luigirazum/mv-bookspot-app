import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategoriesStatus, resetStatus } from '../redux/categories/categoriesSlice';
import { selectIsLoading, selectStatus } from '../redux/categories/categoriesSelectors';

const Categories = () => {
  const isLoading = useSelector(selectIsLoading);
  const status = useSelector(selectStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetStatus());
  }, [dispatch]);

  return (
    <section className="categories">
      {
        isLoading ? (
          <aside className="booksAvailable">
            <h2>one moment please, we are</h2>
            <p
              className="loading"
              style={{
                animationName: 'loading',
              }}
            >
              Loading...
            </p>
            <h2>the Categories</h2>
          </aside>
        ) : (
          <>
            <h2 className="categoriesTitle">Categories</h2>
            {
              status ? (
                <h3 className="loading">
                  {status}
                </h3>
              ) : (
                <button
                  type="button"
                  className="btn btn-chk"
                  onClick={() => dispatch(fetchCategoriesStatus())}
                >
                  Check Status
                </button>
              )
            }

          </>
        )
      }
    </section>
  );
};

export default Categories;
