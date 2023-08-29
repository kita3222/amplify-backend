import { AppNameResolver } from '../../local_app_name_resolver.js';
import { userInfo as _userInfo } from 'os';

/**
 * Resolves an ID that can be used to uniquely identify sandbox environments
 */
export class SandboxIdResolver {
  /**
   * Initialize with an appName resolver
   */
  constructor(
    private readonly appNameResolver: AppNameResolver,
    private readonly userInfo = _userInfo
  ) {}

  /**
   * Returns a concatenation of the resolved appName and the current username
   */
  resolve = async (): Promise<string> => {
    return `${await this.appNameResolver.resolve()}-${
      this.userInfo().username
    }`;
  };
}