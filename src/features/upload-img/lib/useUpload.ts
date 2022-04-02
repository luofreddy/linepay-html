import { ChangeEvent, useCallback, useState } from "react";
import uploadFetch, {UploadFetchOptions} from './uploadFetch';

export interface UseUploadOptions extends UploadFetchOptions {
  maxUploadFileAmount?: number'
}