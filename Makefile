
test:
	@./node_modules/.bin/mocha \
		--require should \
		--reporter spec

test-cov: lib-cov
	@LIC_COV=1 ./node_modules/.bin/mocha \
		--require should \
		--reporter html-cov > coverage.html

lib-cov:
	@jscoverage lib lib-cov

.PHONY: test test-cov
