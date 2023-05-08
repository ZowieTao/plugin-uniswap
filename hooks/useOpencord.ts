/* eslint-disable @typescript-eslint/no-unused-vars */
import { getClient } from '@opencord/client';
import { useMount } from 'ahooks';
import { shallow } from 'zustand/shallow';

import { useAuthInfoStore } from '@/stores/authInfo';

type Opencord = ReturnType<typeof getClient>;

class OpencordHelper {
  client?: Opencord;
  initialized = false;
  initFailed = false;
  getCoding = false;
  inOpencord = false;

  constructor() {
    if (this.initialized) {
      return;
    }
    try {
      const oc = getClient({
        debug: process.env.NODE_ENV === 'development',
      });
      this.initialized = true;
      this.inOpencord = oc.platform !== 'unknown';
      this.initFailed = oc.version === '';

      if (!this.initFailed) {
        this.client = oc;
      }
    } catch {
      this.initFailed = true;
    }
  }

  init() {
    return this.initialized;
  }
}

export const opencordHelper = new OpencordHelper();

export const useOpencord = () => {
  const { authInfo, updateAuthInfo } = useAuthInfoStore((store) => {
    return { authInfo: store.authInfo, updateAuthInfo: store.updateAuthInfo };
  }, shallow);

  const getCode = async () => {
    let code: string | undefined;
    if (authInfo?.code) {
      return authInfo.code;
    }

    if (
      opencordHelper.client &&
      opencordHelper.inOpencord &&
      !opencordHelper.getCoding
    ) {
      opencordHelper.getCoding = true;
      const {
        code: _,
        message: __,
        data,
      } = await opencordHelper.client.getCode();

      opencordHelper.getCoding = false;
      if (data) {
        updateAuthInfo(data);
        const { code: _code } = data;
        code = _code;
      }
    }

    return code;
  };

  useMount(() => {
    if (!opencordHelper.initialized) {
      opencordHelper.init();
    }

    getCode();
  });

  return {
    authInfo,
    isInitialized: opencordHelper.initialized,
    isInitFailed: opencordHelper.initFailed,
    isInOpencord: opencordHelper.inOpencord,
  };
};
