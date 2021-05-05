import { useEffect, useState } from 'react';
import axios from 'axios';
import STD_MESSAGES from 'messages/standard';
import { useSnackbar } from 'notistack';

const useAxios = (
  axiosBlock,
  operationName = '',
  onFetched = () => {},
  onExpectedError = () => {}
) => {
  const [data, setData] = useState(undefined);
  const [failure, setFailure] = useState(undefined);
  const [isLoading, setIsLoading] = useState(false);
  const [source, setSource] = useState(null);
  const [cancelled, setCancelled] = useState(false);

  const { enqueueSnackbar } = useSnackbar();
  useEffect(() => {
    if (failure) {
      if (failure.expected) onExpectedError(failure.error);
      else
        enqueueSnackbar(STD_MESSAGES.UNEXPECTED(operationName), {
          variant: 'error',
        });
    }
  }, [failure]);
  useEffect(() => {
    if (data) onFetched(data);
  }, [data]);

  const fetch = (...args) => {
    setCancelled(false);
    // We use this variable in order to pass the value to the axiosBlock and
    // also to the state as the state propagation is asynchronous.
    const localSource = axios.CancelToken.source();
    setSource(localSource);
    setIsLoading(true);
    axiosBlock(
      (body) => {
        if (!cancelled) {
          setData(body);
          setIsLoading(false);
        }
      },
      (err, expected) => {
        if (!cancelled) {
          setFailure({
            error: err,
            expected,
          });
          setIsLoading(false);
        }
      },
      localSource.token,
      ...args
    );
  };

  const cancelPrevious = () => {
    setCancelled(true);
    if (source != null) source.cancel();
  };

  return [fetch, cancelPrevious, data, failure?.error, isLoading];
};

export default useAxios;
