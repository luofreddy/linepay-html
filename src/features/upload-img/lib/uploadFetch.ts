import {Callback} from './types';

export interface UploadFetchOptions {
  uploadApiUrl: string;
  request?: any,
  onBeforeUploadCheck?: (params?: any) => boolean;
  onUploadFailed?: Callback;
  onUploadSuccess?: Callback;
}

const uploadFetch = ({
  uploadApiUrl,
  request,
  onBeforeUploadCheck,
  onUploadFailed,
  onUploadSuccess,
}: UploadFetchOptions) => {
  const fetchFn = () => {
    return fetch(uploadApiUrl, request)
            .then((res) => res.json())
            .then((res) => {
              if(res.error) {
                onUploadSuccess && onUploadSuccess(res);
              } else {
                onUploadFailed && onUploadFailed(res);
              }
              return res;
            })
            .catch((e) => {
              onUploadFailed && onUploadFailed(e);
            });
  }

  if(onBeforeUploadCheck){
    if(onBeforeUploadCheck()){
      return fetchFn();
    }
  } else {
    return fetchFn();
  }
};

export default uploadFetch;