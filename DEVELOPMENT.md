### Installing Rancher

To use the most recent version of Rancher that is actively in development, use the version tag `v2.10-head` when installing Rancher. For example, the Docker installation command would look like this:

```bash
sudo docker run -d --restart=unless-stopped -p 80:80 -p 443:443 --privileged -e CATTLE_BOOTSTRAP_PASSWORD=OPTIONAL_PASSWORD_HERE rancher/rancher:v2.10-head
```
Note the the “OPTIONAL_PASSWORD_HERE" will be the password you need to bootstrap/login. The default user is admin.
Bootstrap Rancher

Rancher should be running on http://localhost, navigate to the url and bootstrap Rancher.

### Running the Development Environment

 Clone this repository.

```sh
yarn install
API=<Rancher Backend URL> yarn dev  (Example URL: http://localhost)
```

