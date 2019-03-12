/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */

import fs from 'fs';
import path from 'path';
import groupFilesByType from '../groupFilesByType';

/**
 * Copies each file from an array of assets provided to targetPath directory
 *
 * For now, the only types of files that are handled are:
 * - Fonts (otf, ttf) - copied to targetPath/fonts under original name
 */
export default function copyAssetsAndroid(
  files: Array<string>,
  project: {assetsPath: string},
) {
  const assets = groupFilesByType(files);

  (assets.font || []).forEach(asset =>
    fs.copyFileSync(
      asset,
      path.join(project.assetsPath, 'fonts', path.basename(asset)),
    ),
  );
}
