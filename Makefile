REV=$(shell git rev-parse --short HEAD)
TAG ?= $(REV)

.PHONY: build
build:
	podman build . -t agervais/hockey-pool:latest

.PHONY: run
run:
	podman run -it --rm --sig-proxy=true -p 8080:8080 agervais/hockey-pool:latest

.PHONY: push
push: build
	# podman login -u agervais -p mypassword docker.io/agervais/hockey-pool
	podman push agervais/hockey-pool:latest docker://docker.io/agervais/hockey-pool:$(TAG)
	echo "Pushed docker://docker.io/agervais/hockey-pool:$(TAG)"
