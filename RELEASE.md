# Instructions to release a new version

## Permissions
First, you must be part of the Storytel organization on [npmjs.com](https://npmjs.com)

## Publish to npmjs.com
Make sure you're on the latest master, with no uncommitted changes.

```bash
git checkout master
git pull
git status
```

Create a new version locally. Select `major`, `minor` or `patch`
depending on the [impact of the changes](https://semver.org/).

```bash
npm version patch
```

This creates a new commit, and adds a tag. Verify that it all worked out;

```bash
# Shows the commit with the version change
git log -1

# Shows the latest created tag, should match the version in the commit above
git tag | tail -1
```

Do the actual publishing

```bash
npm publish
```

## Updating the example

Now it's time to update the example shown at https://storytel.github.io/react-md-addon-datatables/

Build the example

```bash
yarn example:build
```

This will build the example into the `dist-example/` folder.

Checkout the `gh-pages` branch

```bash
git checkout gh-pages
```

Update the files with your latest build
```
cp dist-example/* .
```

Commit and push the files

```
git add .
git commit -m 'Updated example'
git push
```

Verify that the new changes are available at https://storytel.github.io/react-md-addon-datatables/
