install:
	npm install

start:
	sudo npm link

test-coverage:
	npm test -- --coverage --coverageProvider=v8

lint:
	npx eslint --fix .

publish:
	npm publish --dry-run

test:
	npm test

.PHONY: test