install:
	npm install

start:
	npm link

test-coverage:
	npm test -- --coverage --coverageProvider=v8

lint:
	npx eslint --fix .

publish:
	npm publish --dry-run

test:
	# NODE_OPTIONS=--experimental-vm-modules npx jest
	npm test

.PHONY: test