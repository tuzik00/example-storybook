'use strict';

const path = require('path');
const fs = require('fs');
const url = require('url');

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

const envPublicUrl = process.env.PUBLIC_URL;
const getPublicUrl = appPackageJson => envPublicUrl || require(appPackageJson).homepage;

function ensureSlash(path, needsSlash) {
	const hasSlash = path.endsWith('/');

	if (hasSlash && !needsSlash) {
		return path.substr(path, path.length - 1);
	} else if (!hasSlash && needsSlash) {
		return `${path}/`;
	} else {
		return path;
	}
}

function getServedPath(appPackageJson) {
	const publicUrl = getPublicUrl(appPackageJson);
	const servedUrl = envPublicUrl || (publicUrl ? url.parse(publicUrl).pathname : '/');

	return ensureSlash(servedUrl, true);
}


module.exports = {
	appPath: resolveApp('.'),
	dotenv: resolveApp('.env'),
	appSrc: resolveApp('src'),
	appBuild: resolveApp('dist'),
	appStorybook: resolveApp('.storybook'),
	appPublic: resolveApp('public'),
	appHtml: resolveApp('public/index.html'),
	appIndexJs: resolveApp('src/index.js'),
	appNodeModules: resolveApp('node_modules'),
	appPackageJson: resolveApp('package.json'),
	componentsJs: resolveApp('src/components/**/*.js'),
	yarnLockFile: resolveApp('yarn.lock'),
	publicUrl: getPublicUrl(resolveApp('package.json')),
	servedPath: getServedPath(resolveApp('package.json'))
};

module.exports.useYarn = fs.existsSync(
	path.join(module.exports.appPath, 'yarn.lock')
);
