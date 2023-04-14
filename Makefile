.PHONY: build
build:
	podman build . -t agervais/hockey-pool:latest

.PHONY: run
run:
	podman run -it --rm --sig-proxy=true -p 8080:8080 agervais/hockey-pool:latest
