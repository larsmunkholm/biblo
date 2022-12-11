# Changelog

## [0.9.0](https://github.com/saxofonsolo/biblo/compare/react-native-v0.8.0...react-native-v0.9.0) (2022-12-11)


### Features

* Remove path component from Biblo reader's header and remove default title of Biblo index ([7772027](https://github.com/saxofonsolo/biblo/commit/777202729266d3a2cba601b228f73945d14f107a))


### Bug Fixes

* Add more default stylings ([3514c8b](https://github.com/saxofonsolo/biblo/commit/3514c8b65ad16cb57095b8f48475bb2bf3f8baa3))
* Change `margin` to `spacing`, adjust margins and paddings and add possibility to style and change separator on Biblo index ([e0dc7f0](https://github.com/saxofonsolo/biblo/commit/e0dc7f04aa688e116c83c2decc160690b09dad1a))

## [0.8.0](https://github.com/saxofonsolo/biblo/compare/react-native-v0.7.2...react-native-v0.8.0) (2022-12-08)


### Features

* Add error boundaries to Biblo index ([6172723](https://github.com/saxofonsolo/biblo/commit/6172723e18d35f10d687e7437d5c735c4125c467))
* Add error boundaries to Biblo reader ([fd33e14](https://github.com/saxofonsolo/biblo/commit/fd33e146adf5e67158fbe1258a400773a7b09487))


### Bug Fixes

* Change margins to paddings in default styling ([7e02e68](https://github.com/saxofonsolo/biblo/commit/7e02e68acad683baaa24db29883a2d4dda74edfb))

## [0.7.2](https://github.com/saxofonsolo/biblo/compare/react-native-v0.7.1...react-native-v0.7.2) (2022-12-05)


### Bug Fixes

* Avoid breaking the app if a Biblo file is doesn't have a default export ([fb728d6](https://github.com/saxofonsolo/biblo/commit/fb728d61882403a09f155c593dee24b38ba886f0))
* **docs:** Fix wrong paths to d.ts file ([c4f5c58](https://github.com/saxofonsolo/biblo/commit/c4f5c588d2e2234a0ed881d7de5df5ebafec650d))
* Make adjustment to converting item titles with numbers to sentence case ([4207286](https://github.com/saxofonsolo/biblo/commit/42072865c77a1d3f10754478c768a910615f8d89))
* Make margins easier to adjust with custom styling ([a9d2354](https://github.com/saxofonsolo/biblo/commit/a9d2354c65aa7c880a7a50b0fa6c2d1bcacf125b))

## [0.7.1](https://github.com/saxofonsolo/biblo/compare/react-native-v0.7.0...react-native-v0.7.1) (2022-11-30)


### Bug Fixes

* Fix building workspaces and adjust documentation ([da8ab19](https://github.com/saxofonsolo/biblo/commit/da8ab19f1bd91c3f8243ae5ae9ca0966496bdd02))

## [0.7.0](https://github.com/saxofonsolo/biblo/compare/react-native-v0.6.0...react-native-v0.7.0) (2022-11-30)


### Features

* Add device mockup as demo in docs ([ae39779](https://github.com/saxofonsolo/biblo/commit/ae3977957b1eb5fff0d1cb27a6e75c900b706243))

## [0.6.0](https://github.com/saxofonsolo/biblo/compare/react-native-v0.5.2...react-native-v0.6.0) (2022-11-29)


### Features

* Change where in the code an item's title is converted from PascalCase, convert it to Sentence case instead of Title Case and keep the original title, which will also be passed as a prop to custom components. ([978f446](https://github.com/saxofonsolo/biblo/commit/978f44687ffaf7e6df0ad77a9ee0c25760896dc1))
* Transfer repo to saxofonsolo ([0924eba](https://github.com/saxofonsolo/biblo/commit/0924ebae1608560e09ac3bc778210d8fff995bee))

## [0.5.2](https://github.com/saxofonsolo/biblo/compare/react-native-v0.5.1...react-native-v0.5.2) (2022-11-27)


### Bug Fixes

* Build packages before publishing ([5da356a](https://github.com/saxofonsolo/biblo/commit/5da356a714f0e2c8b6d14b3cc613ed210a361cf7))

## [0.5.1](https://github.com/saxofonsolo/biblo/compare/react-native-v0.5.0...react-native-v0.5.1) (2022-11-27)


### Bug Fixes

* Fix support for Expo Web ([6c3b2c8](https://github.com/saxofonsolo/biblo/commit/6c3b2c8acf120a4bb0eb20a8c562ad6ef245d00d))

## [0.5.0](https://github.com/saxofonsolo/biblo/compare/react-native-v0.4.0...react-native-v0.5.0) (2022-11-27)


### Features

* Add support for addons ([36fbb54](https://github.com/saxofonsolo/biblo/commit/36fbb54f9c7689b9869977b261e70efc1b52ca8f))

## [0.4.0](https://github.com/saxofonsolo/biblo/compare/react-native-v0.3.2...react-native-v0.4.0) (2022-11-26)


### Features

* Add method for resetting selected tags ([7478245](https://github.com/saxofonsolo/biblo/commit/7478245853e7836b48921c6130ef648596efa301))
* Add methods for enabling and disabling tags when using a custom component for tags in BibloIndex ([f1939f0](https://github.com/saxofonsolo/biblo/commit/f1939f0ddc4d2dd9086c2c6ffba7e4a9f6caa0ce))
* Add support for using Biblo with navigation ([f91e5fb](https://github.com/saxofonsolo/biblo/commit/f91e5fb4e447747b6765cf4d10dc62a4adf9e72b))
* Change how examples in Biblo files are made - no objects, use `.bind({})` ([b17be6b](https://github.com/saxofonsolo/biblo/commit/b17be6ba570018d49f7af47139940236cb3a7b4d))


### Bug Fixes

* Fix some re-rendering bugs in BibloIndex and BibloReader ([d6984eb](https://github.com/saxofonsolo/biblo/commit/d6984ebea176d8b46fee1208396c968c7458e4c9))

## [0.3.2](https://github.com/saxofonsolo/biblo/compare/react-native-v0.3.1...react-native-v0.3.2) (2022-11-25)


### Bug Fixes

* Change how `metroRequire.d.ts` is used and exported ([f4d0f82](https://github.com/saxofonsolo/biblo/commit/f4d0f8243f3580fcfedc1a09ef7c62a87cbe89ca))
* Change how the example imports `metroRequire.d.ts` ([88ea4e7](https://github.com/saxofonsolo/biblo/commit/88ea4e706248565b8d58551931fb6adb7b483b79))

## [0.3.1](https://github.com/saxofonsolo/biblo/compare/react-native-v0.3.0...react-native-v0.3.1) (2022-11-25)


### Bug Fixes

* Fix typescript support for `require.context` ([9367009](https://github.com/saxofonsolo/biblo/commit/9367009aa378b6f89fdbb963a6da7c2495a5f3bf))

## [0.3.0](https://github.com/saxofonsolo/biblo/compare/react-native-v0.2.0...react-native-v0.3.0) (2022-11-24)


### Features

* Create a bunch of interfaces available via imports ([#3](https://github.com/saxofonsolo/biblo/issues/3)) ([623fab0](https://github.com/saxofonsolo/biblo/commit/623fab0179f49bbfcf88b48233a4f84a6c01ee7b))

## 0.2.0 (2022-11-24)


### Features

* Documentation and a lot of improvements

## [0.1.0](https://github.com/saxofonsolo/biblo/compare/react-native-v0.0.1...react-native-v0.1.0) (2022-11-23)


### Features

* Create a bunch of interfaces available via imports ([#3](https://github.com/saxofonsolo/biblo/issues/3)) ([623fab0](https://github.com/saxofonsolo/biblo/commit/623fab0179f49bbfcf88b48233a4f84a6c01ee7b))
